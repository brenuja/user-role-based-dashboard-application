import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  // const [newTask, setnewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    // setnewTask({taskTitle, taskDate, taskDescription, category, active:false, NewTask:true, failed:false, completed:false})

    const newTask = {
      taskTitle,
      taskDate,
       taskDescription, 
       category, 
       active:false, 
       newTask:true, 
       failed:false, 
       completed:false
      };

    const data = userData

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
          elem.tasks.push(newTask)
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })

    setUserData(data)
    console.log(data)

    settaskDate('')
    settaskDescription('')
    settaskTitle('')
    setassignTo('')
    setcategory('')
  }

  return (
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-wrap w-full items-start justify-between '>
            <div className='w-1/2'>
              <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                  settaskTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="text" placeholder='Make a UI design' />
              </div>
              <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  settaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="date" />
              </div>
              <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Assign To</h3>
                <input 
                value={assignTo}
                onChange={(e)=>{
                  setassignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="text" placeholder='employee name' />
              </div>
              <div>
                <h3 className='text-sm text-gray-400 mb-0.5'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                  setcategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4 rounded' type="text" placeholder='Design, dev, etc' />
              </div>
            </div>
            
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-400 mb-0.5'>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                  settaskDescription(e.target.value)
                }}
                className='text-sm py-2 px-4 h-44 w-full outline-none bg-transparent border-[1px] rounded border-gray-400 ' name="" id=""></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
