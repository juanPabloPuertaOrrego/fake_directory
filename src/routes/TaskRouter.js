import React from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AddTaskComponent } from '../components/AddTaskComponent/AddTaskComponent'
import {AllTasks} from '../components/AllTasks/AllTasks'

export const TaskRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/add" element={<AddTaskComponent/>}/>
                <Route path="/edit/id" element={<h1>aqui va el componente que edita tareas</h1>}/>
                <Route path="/" element={<AllTasks/>}/>
            </Routes>
        </Router>
    )
}