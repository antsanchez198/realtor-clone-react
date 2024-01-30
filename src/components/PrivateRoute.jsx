import {Outlet, Navigate} from 'react-router-dom'
import {usedAuthStatus} from '../hooks/usedAuthStatus'
import Spinner from './Spinner';

const PrivateRoute = () => {
  const {loggedIn, checkingStatus} = usedAuthStatus();

  if(checkingStatus) {
    return <Spinner/>
  }

  return loggedIn ? <Outlet/> : <Navigate to="/sign-in" />
}

export default PrivateRoute