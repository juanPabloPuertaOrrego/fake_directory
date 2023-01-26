import React, {useState} from 'react'
import { TaskView } from './TaskView'

export const AllTaskComponent=(props)=>{
    const [taskIsDone, setTaskIsDone] = useState(false)
    const {allTask} = props
    console.log(allTask, 'desde component task')

    const handleOnComplete=(id)=>{
        setTaskIsDone(!taskIsDone)
    }
    console.log(taskIsDone)

    return(
        <div>
            {allTask.map((element)=>
            <TaskView key={element.id} 
            allTask={element} 
            handleOnComplete={handleOnComplete}
            doneStyle={taskIsDone?'line-through red':"none"}
            
            />)}
        </div>
    )
}