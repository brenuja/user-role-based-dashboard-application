import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

 const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email , password)
    setEmail('')
    setPassword('')
  }
  return (
      <div className='flex h-screen w-screen justify-center items-center'>
         <div className='border-2 border-blue-600 p-20 rounded-2xl'>
             <form 
               onSubmit={(e)=>{
                submitHandler(e)
               }}
               className='flex flex-col items-center justify-center'>
                 <input 
                 value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                 }}
                 required className='text-white bg-transparent border-2 mb-5 border-blue-500 p-2 text-xl rounded-xl' type="email" placeholder='Enter your Email' />
                 <input 
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 required className='text-white bg-transparent border-2 mb-5 border-blue-500 p-2 text-xl rounded-xl' type="password" placeholder='Enter you password' />
                 <button className=' bg-blue-500 px-6 py-2 rounded-3xl mt-5'>Log in</button>
             </form>
         </div>
      </div>
  )
}

export default Login
