import React from 'react'

// use later.. apply useContext
const ErrMsg = () => {
  return (
      <div className=" bg-transparent px-6 flex flex-row justify-center w-full absolute ">
        <div className="bg-black w-3/4 z-20 px-3 py-5 flex flex-row justify-center items-start">
          <div className="w-4/5 " >
            <h1 className='text-red-700 font-semibold'> An error occurred somewhere </h1>
          </div>
          <div className="  flex items-start " >
              <input className='text-white font-bold hover:text-red-900' type="button" onClick={() => setErrMsg(null)} onBlur={() => { setPending(false) }} value="X" />
          </div>
        </div>
      </div>
    
  )
}

export default ErrMsg