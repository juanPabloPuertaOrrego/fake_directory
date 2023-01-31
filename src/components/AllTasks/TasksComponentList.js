import React, {useContext} from 'react'
import { TaskContext } from '../../context/TaskContext';
import { TaskComponent } from './TaskComponent'


export const TasksComponentList=(props)=>{
    
    const {tasks} = useContext(TaskContext)

    const {hideDoneTasks} = props     
    
    const tasksToShow = hideDoneTasks ? tasks.filter(task => !task.done):tasks

    return(

        <div className='d-flex align-items-start flex-wrap'>
            { tasksToShow.map((element)=>
            <TaskComponent key={element.id} 
            task={element}
           // changeHandler = {seTtruco}             
            />)}
        </div>
    )
}