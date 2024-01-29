import {Outlet, Navigate} from 'react-router-dom'
import {usedAuthStatus} from '../hooks/usedAuthStatus'

const PrivateRoute = () => {
  const {loggedIn, checkingStatus} = usedAuthStatus();

  if(checkingStatus) {
    return <h3>Loading...</h3>
  }

  return loggedIn ? <Outlet/> : <Navigate to="/sign-in" />
}

export default PrivateRoute