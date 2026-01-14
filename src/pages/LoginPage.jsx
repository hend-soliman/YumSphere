import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='w-full h-dvh bg-amber-200 flex flex-col items-center justify-center'>
      <div className='w-[80%] h-[500px] flex flex-col justify-center items-center text-blue-600 text-3xl  rounded-2xl shadow bg-orange-300'>
        <p>
           
        Login Section
        </p>

        <Link to='/register' className='underline self-end'>
        
        New User Create New Account
      </Link>
      </div>

      
      

    </div>
  )
}
