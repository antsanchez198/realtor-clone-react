import React from 'react'
import { FcGoogle } from "react-icons/fc"

const OAuth = () => {
    return (
        <button className='flex w-full rounded bg-red-700 items-center justify-center px-7 py-3 uppercase text-white gap-2
        text-sm font-medium hover:bg-red-800 transition duration-200 ease-in-out shadow-md active:bg-red-900'>
            <FcGoogle className='text-2xl bg-white rounded-full'/>
            Continue with Google
        </button>
    )
}

export default OAuth