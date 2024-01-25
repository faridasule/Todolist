import React from 'react'
import {useSelector } from 'react-redux'


const TaskListTable = () => {
    const taskList = useSelector((state) => state.tasks.taskList);


  return (
    <>
      <table className="table table-dark table-hover container"  style={{marginTop: "2rem", width: "100%"}}>
        <thead>
          <tr className="text-info text-primary" >
            <th className='text-primary' scope="col">Task</th>
          </tr>
        </thead>
        <tbody>
           {taskList.map((task, index) => (
             <tr key={index}>
                 <td>{task.name}</td>
               </tr> 
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TaskListTable
