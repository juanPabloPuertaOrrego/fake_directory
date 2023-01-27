import React from 'react'

export const TaskView=(props)=>{
const {handleOnComplete, handleOnDelete, handleOnEdit, task, doneStyle} = props

    return(
        <div className="card" style={{ width: '18rem', marginTop: '30px', textDecoration:`${doneStyle}` }}>
        <div className="card-body">
          <h5 className="card-title" style={{ cursor: 'pointer' }} >{task.task}</h5>
          <button type="submit" className="btn btn-success mr-2" onClick={() => handleOnComplete(task.id)}>Done</button>
          <button type="submit" className="btn btn-danger " onClick={() => handleOnDelete(task.id)}>Delete</button>
          <button type="submit" className="btn btn-warning " onClick={() => handleOnEdit(task.id)}>Edit</button>
        </div>
      </div>
    )
} 