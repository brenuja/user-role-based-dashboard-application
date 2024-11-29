import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
    
  return (
    <div>
      <div className='p-10 bg-zinc-900 h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
