import { useContext } from 'react'
import { WorkoutsContext } from '../context/WorkoutContext'

// to check and ensure that we are within the component tree
export const useWorkoutsContext = () => {

    const context = useContext(WorkoutsContext);

    if (!context) {
        throw Error('useworkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context;

}

// export default useWorkoutsContext;