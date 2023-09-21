import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import useLogout from '../hooks/useLogout'
// import SideBar from './AuthHome'

import { FaTimes } from 'react-icons/fa'
import { IoMdList } from 'react-icons/io'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()

    const handleClick = () => {
        logout()

        navigate('/login')
    }


    return (
        <header className='bg-slate-100 '>
            <div className='container'>
                <div className='w-1/4 px-3'>
                    {!user &&
                        <h1 className='text-red-500 font-bold text-2xl '> Workout </h1>
                    }
                    {user &&
                        <div className=' h-1 -mt-2 '>
                            {toggle && <FaTimes type='button' onClick={() => setToggle(!toggle)} className='text-gray-600 relative hover:text-red-600 font-bold text-xl' />}
                            {!toggle && <IoMdList type='button' onClick={() => setToggle(!toggle)} className='text-gray-600 hover:text-red-600 font-bold' />}
                            {toggle &&
                                <div onClick={() => { setToggle(!toggle)}} className='flex flex-row py-2 z-10 absolute bg-gray-300 w-20  items-center justify-end'>
                                    <Link className='text-gray-800 mr-5' to="/">
                                        Home
                                    </Link>
                                </div>
                            }
                        </div>
                    }
                </div>
                <nav className=' w-3/4 pr-3 flex items-center justify-end '>
                    {user && (
                        <div className='flex flex-row justify-end items-center mr-2 mb-3' >
                            <span className='text-black mr-5 flex items-center justify-center'> {user.email}</span>
                            <button className='text-red-400 hover:text-red-600  p-1 border-2 hover:border-red-600 border-red-400 mr-5' onClick={handleClick}> Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className='flex flex-row items-center justify-end'>
                            <Link className='text-gray-800 mr-5' to="/login">
                                Login
                            </Link>
                            <Link className='text-gray-800 mr-5' to="/signup">
                                Sign up
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
