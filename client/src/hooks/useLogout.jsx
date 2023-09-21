import React from 'react'
import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContexts'

const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch: workoutDispatch } = useWorkoutsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        // so as to clear previous data after logout
        workoutDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}

export default useLogout