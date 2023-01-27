import React, {useState} from 'react'
import { TaskComponent } from './TaskComponent'
import { TaskView } from './TaskView'

export const AllTaskComponent=(props)=>{
    const {allTask} = props

    const [taskIsDone, setTaskIsDone] = useState(allTask.done)
    console.log(allTask, 'desde component task')
    

    return(
        <div>
            {allTask.map((element)=>
            <TaskComponent key={element.id} 
            task={element}             
            />)}
        </div>
    )
}