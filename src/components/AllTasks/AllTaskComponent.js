import React, {useState} from 'react'
import { TaskComponent } from './TaskComponent'


export const TasksComponentList=(props)=>{
    const [truco, seTtruco] = useState(false);
    const {allTask, hideDoneTasks} = props     
    
    const tasksToShow = hideDoneTasks ? allTask.filter(task => !task.done):allTask

    return(

        <div className='d-flex align-items-start flex-wrap'>
            { tasksToShow.map((element)=>
            <TaskComponent key={element.id} 
            task={element}
            changeHandler = {seTtruco}             
            />)}
        </div>
    )
}