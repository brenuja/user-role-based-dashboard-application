import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] ml-6 bg-orange-600  rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='font-semibold mt-5 text-2xl'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-8'>
            <button className='py-1 px-2 rounded bg-red-700'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
