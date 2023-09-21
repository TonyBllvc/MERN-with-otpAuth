import React, { useState } from 'react'

import { FaLock, FaUserAlt } from 'react-icons/fa'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPwd] = useState('')
    const { login, pending, error} = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
    return (
        <div>
            <form className=" flex flex-col items-center text-center bg-slate-200" onSubmit={handleSubmit} >
                <h2 className=' font-bold text-black' > Log in Page </h2>
                <div className="w-full flex flex-row justify-center items-center mt-3">
                    <FaUserAlt className='text-black' />
                    <input type="email" className="bg-slate-300 lg:w-1/3 p-1 rounded-lg border-red-700 ml-2 border-solid"
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby='title'
                        value={email}
                        placeholder={!email ? 'Email ' : ''}
                        required
                    />
                </div>
                <div className="w-full flex flex-row justify-center items-center mt-3">
                    <FaLock className="text-black" />
                    <input type="password" className="bg-slate-300 lg:w-1/3 border-red-700 ml-2 border-solid"
                        aria-describedby='loadnote'
                        onChange={(e) => setPwd(e.target.value)}
                        value={password}
                        placeholder={!password ? 'Password' : ''}
                        required
                    />

                </div>
                {!pending && <button className='bg-green-600 lg:w-1/3 lg:ml-7 w-1/2 ml-2'> Log in </button>}
                {pending && <button className='bg-gray-200 text-slate-500 lg:w-1/3 lg:ml-7 w-1/2 ml-2' disabled> Logging in... </button>}
                {error && <div className="text-red-700 font-bold mt-3 text-center border-red-700 border-solid border-2"> {error} </div>}
            </form>

        </div>
    )
}

export default Login