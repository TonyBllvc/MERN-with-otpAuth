import React, {  useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useWorkoutsContext } from '../hooks/useWorkoutsContexts'
// import { useNavigate } from 'react-router-dom';

const WorkoutForm = () => {

    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext();

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const [emptyFields, setEmptyFields] = useState([ ])


    // const userRef = useRef()

    // const navigate = useNavigate()


    // This runs on onload render
    // useEffect(() => {
    //     // sets focus on user input
    //     userRef.current.focus();
    // }, []);

    // const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user){
            setError('You must be logged in')
            return
        }

        setPending(true)

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                // to output the bearer token 
                // by user the ${user.token}
                // this is then picked by the middleware in the backend that protects our routes
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
            setPending(false)
        }
        if (response.ok) {
            alert('New block added')
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([ ])
            //  to aid with reloading the page once data has been added
            dispatch({type: 'CREATE_WORKOUT', payload: json})
            console.log('new workout added', json)
            setPending(false)
            // navigate('/');
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className=' font-bold' > Add a new workout </h2>
                <label htmlFor="">
                    Title:
                </label>
                <input type="text" className={emptyFields.includes('title') || !title ? 'bg-slate-300 border-red-700 border-solid' : 'bg-gray-700'}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-describedby='title'
                    value={title}
                    placeholder={ !title ? 'Required*' : '' }
                    required
                />
                <label htmlFor="">
                    Load (in kg):
                </label>
                <input type="number" className={emptyFields.includes('load')|| !load ? 'bg-slate-300 border-red-700 border-solid' : 'bg-gray-700'}
                    aria-describedby='loadnote'
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    placeholder={ !load ? 'Required*' : '' }
                    required
                />
                <label htmlFor="">
                    Reps:
                </label>
                <input type="text" className={emptyFields.includes('reps')|| !reps ? 'bg-slate-300 border-red-700 border-solid' : 'bg-gray-700'}
                    onChange={(e) => setReps(e.target.value)}
                    aria-describedby='reps'
                    value={reps}
                    placeholder={ !reps ? 'Required*' : '' }
                    required
                />
                {!pending && <button className='bg-green-600'> Add Workout </button>}
                {pending && <button className='bg-gray-200 text-slate-500' disabled> Adding Workout... </button>}
                {error && <div className="text-red-700 font-bold mt-3 text-center border-red-700 border-solid border-2"> {error} </div>}
            </form>
        </div>
    )
}

export default WorkoutForm



















// import React, { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const WorkoutForm = () => {

//     const [title, setTitle] = useState('')
//     const [load, setLoad] = useState('')
//     const [reps, setReps] = useState('')
//     const [error, setError] = useState(null)
//     const [pending, setPending] = useState(false)

//     // const userRef = useRef()

//     const navigate = useNavigate()


//     // This runs on onload render
//     // useEffect(() => {
//     //     // sets focus on user input
//     //     userRef.current.focus();
//     // }, []);

//     // const [errMsg, setErrMsg] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setPending(true)

//         const workout = { title, load, reps }

//         const response = await fetch('/api/workouts', {
//             method: 'POST',
//             body: JSON.stringify(workout),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })

//         const json = await response.json();

//         if (!response.ok) {
//             setError(json.error)
//             setPending(true)
//         }
//         if (response.ok) {
//             alert('New block added')
//             setTitle('')
//             setLoad('')
//             setReps('')
//             setError(null)
//             console.log('new workout added', json)
//             setPending(false)
//             navigate('/');
//         }

//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h3> Add a new workout </h3>
//                 <label htmlFor="">
//                     Title:
//                 </label>
//                 <input type="text" className='bg-black '
//                     onChange={(e) => setTitle(e.target.value)}
//                     aria-describedby='title'
//                     value={title}
//                 />
//                 <label htmlFor="">
//                     Load (in kg):
//                 </label>
//                 <input type="number" className='bg-black'
//                     aria-describedby='loadnote'
//                     onChange={(e) => setLoad(e.target.value)}
//                     value={load}
//                 />
//                 <label htmlFor="">
//                     Reps:
//                 </label>
//                 <input type="text" className='bg-black'
//                     onChange={(e) => setReps(e.target.value)}
//                     aria-describedby='reps'
//                     value={reps}
//                 />
//                 {!pending && <button className='bg-green-600'> Add Workout </button>}
//                 {pending && <button className='bg-gray-200 text-slate-500' disabled> Adding Workout... </button>}
//                 {error && <div className="text-red-500 mt-3 border-red-700 border-solid border-2"> {error} </div>}
//             </form>
//         </div>
//     )
// }

// export default WorkoutForm