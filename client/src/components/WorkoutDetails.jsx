import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContexts';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { FaTrashAlt } from 'react-icons/fa'
import { useAuthContext } from '../hooks/useAuthContext';

const workoutDetails = ({ workoutData }) => {
    
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const handleClick = async () => { 
        
        if(!user){
            return
        }

        const response = await fetch('/api/workouts/' + workoutData._id, {
            method: 'DELETE',
            headers: {
                // to output the bearer token 
                // by user the ${user.token}
                // this is then picked by the middleware in the backend that protects our routes
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workoutDetails ">
            <div className=' w-11/12 '>
                <h4 className="text-gray-800 w-full text-lg font-extrabold">
                    {workoutData.title}
                </h4>
                <p className='text-black w-full'>
                    <strong> Load (kg) : </strong> {workoutData.load}
                </p>
                <p className='text-black w-full'>
                    <strong> Reps: </strong> {workoutData.reps}
                </p>
                <p className='text-black w-full'>
                    <small> {formatDistanceToNow(new Date(workoutData.createdAt), {addSuffix: true})}
                     </small>
                </p>
            </div>
            <div>
                <FaTrashAlt type="button" value=""
                    className=' text-red-500 text-xs font-thin'
                    onClick={handleClick} />
                {/* <input type="button" value="Delete"
                    className=' text-red-500 text-xs font-thin hover:text-red-800'
                    onClick={handleClick} /> */}
                    {/* <WebpackIcon className="text-blue-400" firstColor="blue" secondColor="purple" size={32} duration={1}/> */}
                    {/* <UseAnimations animationKey="trash"  size={20} style={{ color: "black"}} /> */}
            </div>
        </div>

    )
}

export default workoutDetails















// import React from 'react'

// const workoutDetails = ({ workoutData }) => {
//     return (
//         <div>
//             <div className="text-black font-bold bg-slate-500 mb-2 px-5 py-2 flex flex-col justify-center items-center " key={workoutData._id}>
//                 <h4 className="text-black font-bold">
//                     {workoutData.title}
//                 </h4>
//                 <p className='text-white'>
//                     <strong> Load (kg) : </strong> {workoutData.load}
//                 </p>
//                 <div className="w-full flex text-end justify-end">
//                     <p className="text-black">
//                         <small className=' font-small text-xs '> {workoutData.createdAt} </small>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default workoutDetails