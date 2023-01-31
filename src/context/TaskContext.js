import React, {createContext, useState} from 'react'

export const TaskContext = createContext()

//const db = [{id:0, task:'first one', done: false}]

export const TaskContextProvider =({children})=>{

    const  [tasks, setTasks]=useState([])

    const constextValue={
        tasks,setTasks
    }

    return (
        <TaskContext.Provider value={constextValue}>
        {children}
        </TaskContext.Provider>
    )
}
