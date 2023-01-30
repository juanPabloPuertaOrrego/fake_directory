import React ,{createContext, useState}from 'react'

export const TasksHistoryContext = createContext()

const db = [{id:0, task:'first one', done: false}]

export const TasksHistoryContextProvider =({children})=>{
    
    const [historyTasks, setHistoryTasks] = useState(db);

    const historyTasksValues = {
        historyTasks, setHistoryTasks
    }

    return (
        <TasksHistoryContext.Provider value={historyTasksValues} >
            {children}
        </TasksHistoryContext.Provider>
    )
}