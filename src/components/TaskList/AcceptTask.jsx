import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-indigo-600 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='font-semibold mt-5 text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-6'>
            <button className='rounded text-sm py-1 px-2 bg-green-600'>Mark as completed</button>
            <button className='rounded text-sm py-1 px-2 bg-red-600'>Mark as failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
