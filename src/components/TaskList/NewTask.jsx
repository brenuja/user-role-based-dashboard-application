import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] ml-6  bg-green-700 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='font-semibold mt-5 text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
          <div className='mt-4 '>
            <button className=' rounded bg-blue-700 px-2 py-1'>Accept Task</button>
          </div>
      </div>
  )
}

export default NewTask  

// ek baar restart server
