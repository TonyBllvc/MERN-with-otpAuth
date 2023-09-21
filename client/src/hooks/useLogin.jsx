import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)

    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setPending(true)
        setError(null)

        // const details = { email, password }

        const res = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await res.json()

        if (!res.ok) {
            setPending(false)
            setError(json.error)
            return
        }
        if (res.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
        }

        // update auth Context
        dispatch({ type: 'LOGIN', payload: json })

        setPending(false)

        navigate('/')
    }

    return { login, pending, error, setPending }
}

// export default useSignup;
