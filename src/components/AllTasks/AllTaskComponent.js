import React from 'react'
import { TaskView } from './TaskView'

export const AllTaskComponent=(props)=>{
    const {allTask} = props
    return(
        <div>
            {allTask.map((element)=><TaskView key={element.id}  />)}
        </div>
    )
}