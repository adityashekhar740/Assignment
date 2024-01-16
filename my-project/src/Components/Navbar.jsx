import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='h-[90px] pt-5 w-[100%] px-[130px] flex items-center justify-between  ' >
        <div>
            <img  width={191} height={39} src="../../public/Component 3.png" alt="" />
        </div>
        <div className='flex gap-[40px] ' >          
            <div className='features' >Home</div>
            <div className='features'  >Flashcard</div>
            <div className='features'  >Contact</div>
            <div className='features'  >FAQ</div>
            <button className='py-[13px] px-[40px] text-lg flex items-center  rounded-3xl bg-gradient-to-b from-blue-900 to-blue-500 h-screen w-[128px] h-[48px] text-[white] ' >Login</button>

        </div>
    </div>
  )
}

export default Navbar