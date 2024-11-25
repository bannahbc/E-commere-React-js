import React from 'react'


function Error() {
  
  return (
    <div className='error rounded w-full m-h-s flex flex-col items-center  justify-center border-b-2 border-yellow-200  bg-green-200 p-28'>
      <h2><span className='text-rose-700 font-extrabold text-4xl'>O</span> ops !</h2>
      <h4 className='font-bold text-gray-800'>Somthing went Wrong</h4>
      <button className='bg-blue-500 mt-2 p-2 hover:bg-slate-500 px-6 rounded'>Retry</button>
    </div>
  )
}

export default Error;