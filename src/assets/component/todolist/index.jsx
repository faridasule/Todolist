import React from 'react'
import AddTask from '../task/add-task'
import TaskListTable from '../task/task-list'

const TodoList = () => {
  return (
    <>
      <AddTask />
      <TaskListTable/>
    </>
  )
}

export default TodoList
