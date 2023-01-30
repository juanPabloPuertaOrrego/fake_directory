import React, {useContext, useState}from 'react'
import { TasksHistoryContext } from '../../context/TasksHistoryContext'
import { useNavigate } from 'react-router-dom'


export const HistoryTasksComponent =()=>{
const {historyTasks} = useContext(TasksHistoryContext)
console.log(historyTasks)
const navigate = useNavigate()



const handleGoToHome =()=>{
    navigate('/')
}

    return(
        <>
        <h1>historial de las tareas</h1>
        <button onClick={handleGoToHome}>go to home</button>
        </>
    )
}