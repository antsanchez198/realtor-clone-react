import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { useNavigate } from 'react-router';


const OAuth = () => {
    
    const navigate = useNavigate();

    const onGoogleCLick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if(!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }

            navigate('/')

        } catch (error) {
            toast.error("Could not autorize with Google")
            console.log(error)
        }
    }

    return (
        <button className='flex w-full rounded bg-red-700 items-center justify-center px-7 py-3 uppercase text-white gap-2
        text-sm font-medium hover:bg-red-800 transition duration-200 ease-in-out shadow-md active:bg-red-900'
        onClick={onGoogleCLick}
        type='button'
        >
            <FcGoogle className='text-2xl bg-white rounded-full'/>
            Continue with Google
        </button>
    )
}

export default OAuth