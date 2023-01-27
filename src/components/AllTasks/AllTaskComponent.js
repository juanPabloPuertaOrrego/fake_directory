import React from 'react'
import { TaskComponent } from './TaskComponent'


export const AllTaskComponent=(props)=>{
    const {allTask} = props  

    return(
        <div>
            {allTask.map((element)=>
            <TaskComponent key={element.id} 
            task={element}             
            />)}
        </div>
    )
}