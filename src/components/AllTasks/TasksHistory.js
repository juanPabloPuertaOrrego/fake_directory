import React from 'react'
import { TasksComponentList } from './TasksComponentList'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { useNavigate } from 'react-router-dom'

export const TaskHistory =()=>{
    const {tasks, setTasks} =useContext(TaskContext)
    const navigate = useNavigate()

    const handleOnBack =()=>{
        navigate('/')
    }

    return(
        <>
        <button onClick={handleOnBack}>Go back home</button>
        <TasksComponentList 
        allTask={tasks}
        hideDoneTasks={false}
        
        />
        </>
    )
}