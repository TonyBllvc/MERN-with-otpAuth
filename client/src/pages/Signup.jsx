import React, { useState } from 'react'

import { FaLock, FaUserAlt } from 'react-icons/fa'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, pending, setPending } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }  
    return (
        <div>
            <form className=" flex flex-col items-center text-center bg-slate-200" onSubmit={handleSubmit} >
                <h2 className=' font-bold text-black' > Sign up Page </h2>
                <div className="w-full flex flex-row justify-center items-center mt-3">
                    <FaUserAlt className='text-black' />
                    <input type="email" className="bg-slate-300 text-black lg:w-1/3 p-1 rounded-lg border-red-700 ml-2 border-solid"
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setPending(false)}
                        aria-describedby='title'
                        value={email}
                        placeholder={!email ? 'Email ' : ''}
                    />
                </div>
                <div className="w-full flex flex-row justify-center items-center mt-3">
                    <FaLock className="text-black" />
                    <input type="password" className="bg-slate-300 text-black lg:w-1/3 border-red-700 ml-2 border-solid"
                        aria-describedby='loadnote'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        onFocus={() => setPending(false)}
                        placeholder={!password ? 'Password' : ''}
                    />

                </div>
                {!pending && <button className='bg-green-600 lg:w-1/3 lg:ml-7 w-1/2 ml-2'> Sign up </button>}
                {pending && <button className='bg-gray-200 text-slate-500 lg:w-1/3 lg:ml-7 w-1/2 ml-2' disabled> Signing up... </button>}
                {error && <div className="text-red-700 font-bold mt-3 text-center border-red-700 border-solid border-2"> {error} </div>}
            </form>

        </div>
    )
}

export default Signup