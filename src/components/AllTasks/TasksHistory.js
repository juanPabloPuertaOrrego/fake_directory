import React from 'react'
import { AllTaskComponent } from './AllTaskComponent'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

export const TaskHistory =()=>{
    const {tasks, setTasks} =useContext(TaskContext)
    console.log(tasks)

    return(
        <AllTaskComponent allTask={tasks}/>
    )
}