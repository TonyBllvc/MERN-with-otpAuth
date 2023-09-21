import { useEffect } from "react";

import { useWorkoutsContext } from "../hooks/useWorkoutsContexts";
import { useAuthContext } from '../hooks/useAuthContext'

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts', {
                // we need to send authorization headers(required for authorization)
                headers: {
                    // to output the bearer token 
                    // by user the ${user.token}
                    // this is then picked by the middleware in the backend that protects our routes
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        if(user){
            fetchWorkout()

        }
    }, [dispatch, user] )


    return (
        <div className="workouts grid grid-cols-3 min- sm:grid-cols-2 gap-1">
            <div className="workout w-full col-span-2 sm:col-span-1">
                {workouts && workouts.map((data) => (
                    <WorkoutDetails key={data._id}  workoutData={data} />
                ))}
            </div>
            <div className="workout col-span-1 sm:col-span-1">
                <WorkoutForm />
            </div>
        </div>
    );
}

export default Home;
























// import { useEffect, useState } from "react";

// // components
// import WorkoutDetails from "../components/WorkoutDetails";
// import WorkoutForm from "../components/WorkoutForm";

// const Home = () => {

//     const [workout, setWorkout] = useState(null);

//     useEffect(() => {
//         const fetchWorkout = async () => {
//             const response = await fetch('/api/workouts')
//             const json = await response.json()

//             if (response.ok) {
//                 // json is picked up from
//                 // '../../../backend/controllers/workoutcontrolers.js'
//                 // in the '//get all workouts
//                 setWorkout(json)
//             }
//         }

//         fetchWorkout()
//     }, [])


//     return (
//         <div className="workouts grid grid-cols-3 min- sm:grid-cols-2 gap-1">
//             <div className="workout w-full col-span-2 sm:col-span-1">
//                 {workout && workout.map((data) => (
//                     <WorkoutDetails key={data._id} workoutData={data} />
//                 ))}
//             </div>
//             <div className="workout col-span-1 sm:col-span-1">
//                 <WorkoutForm />
//             </div>
//         </div>
//     );
// }

// export default Home;