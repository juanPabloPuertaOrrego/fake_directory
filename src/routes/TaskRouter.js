import React from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AddTaskComponent } from '../components/AddTaskComponent/AddTaskComponent'
import {AllTasks} from '../components/AllTasks/AllTasks'
import { TaskHistory } from '../components/AllTasks/TasksHistory'
import { EditTaskComponent } from '../components/EditTaskComponent/EditTaskComponent'

export const TaskRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/add" element={<AddTaskComponent/>}/>
                <Route path="/edit/:id" element={<EditTaskComponent/>}/>
                <Route path="/" element={<AllTasks/>}/>
                <Route path="/taskHistory" element={<TaskHistory/>}/>
            </Routes>
        </Router>
    )
}