import React from 'react'
import logo from '../Images/logo.jpg'

const Header = () => {
    return (
        <div className='h-[4rem] w-full bg-slate-300 rounded-full flex justify-center items-center text-3xl underline mt-3'>
            <img src={logo} alt="" className='h-1/2 mr-2' />
            Memories
        </div>

    )
}

export default Header