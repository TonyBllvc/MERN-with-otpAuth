import { useState } from 'react'

import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)

    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setPending(true)
        setError(null)

        // const details = { email, password }

        const res = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await res.json()

        if (!res.ok) {
            setPending(false)
            setError(json.error)
        }
        if (res.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
        }

        // update auth Context
        dispatch({ type: 'LOGIN', payload: json })

        setPending(true)

    }

    return { signup, pending, error, setPending }
}

// export default useSignup;
