import React from 'react'

export const TaskView=(props)=>{
const {handleOnEdit, handleOnDelete, taskText, id, isDone, doneStyle} = props
    return(
        <div className="card" style={{ width: '18rem', marginTop: '30px', textDecoration:`${doneStyle}` }}>
        <div className="card-body">
          <h5 className="card-title" onClick={isDone} style={{ cursor: 'pointer' }} >{taskText}</h5>
          <button type="submit" className="btn btn-success mr-2" onClick={() => handleOnEdit(id)}>Edit</button>
          <button type="submit" className="btn btn-danger " onClick={() => handleOnDelete(id)}>Delete</button>
        </div>
      </div>
    )
}