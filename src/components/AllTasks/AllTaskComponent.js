import React from 'react'
import { TaskComponent } from './TaskComponent'


export const AllTaskComponent=(props)=>{
    const {allTask} = props  

    return(
        <div className='d-flex align-items-start flex-wrap'>
            {allTask.map((element)=>
            <TaskComponent key={element.id} 
            task={element}             
            />)}
        </div>
    )
}