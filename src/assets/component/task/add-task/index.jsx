import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../../redux/features/todoListSlice'

const AddTask = () => {
  // Import dispatch from react-redux
  const dispatch = useDispatch()

  const [task, setTask] = useState('')

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Dispatch the addTask action with the task data
    dispatch(addTask({ name: task }))
  }

  return (
    <>
      <form
        id="addTaskForm"
        className="container"
        autoComplete="off"
        style={{ marginTop: '30px' }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Add a task
          </label>

          <input
            type="text"
            className="form-control"
            id="task"
            name="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  )
}

export default AddTask
