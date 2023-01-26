import React from 'react'

export const TaskView=(props)=>{
const {handleOnComplete, handleOnDelete, allTask, isDone, doneStyle} = props

console.log(allTask, 'desde vista')
    return(
        <div className="card" style={{ width: '18rem', marginTop: '30px', textDecoration:`${doneStyle}` }}>
        <div className="card-body">
          <h5 className="card-title" style={{ cursor: 'pointer' }} >{allTask.task}</h5>
          <button type="submit" className="btn btn-success mr-2" onClick={handleOnComplete(allTask.id)}>Done</button>
          <button type="submit" className="btn btn-danger " onClick={() => handleOnDelete(allTask.id)}>Delete</button>
        </div>
      </div>
    )
} 