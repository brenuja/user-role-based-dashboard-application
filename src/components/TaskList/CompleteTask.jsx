import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] ml-6  bg-amber-400 rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
      <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='font-semibold mt-5 text-2xl'>{data.taskTitle}</h2>
    <p className='text-sm mt-2'>{data.taskDescription}</p>
    <div className='mt-5 '>
        <button className='rounded bg-green-600 py-1 px-2'>Complete</button>
    </div>
  </div>
  )
}

export default CompleteTask
