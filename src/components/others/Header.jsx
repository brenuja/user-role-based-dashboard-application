import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  //   }else{
  //     setusername(data.firstName)
  //   }
  

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>user!👋</span>  </h1>
      <button onClick={logOutUser} className='py-2 px-5 font-medium rounded-lg text-xl bg-red-800'>Log out</button>
    </div>
  )
}

export default Header
