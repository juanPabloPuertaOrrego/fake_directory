import React, {useState} from 'react'
import { TaskView } from './TaskView'

export const TaskComponent =(props)=>{
    const {task} = props
    const [done, setDone] = useState(false);

    const handleOnComplete =(id)=>{
        setDone(!done)
    }

    return(
        <TaskView 
        task={task}
        handleOnComplete={handleOnComplete}  
        doneStyle={done?'line-through red' : 'none'}  
        />
    )
}