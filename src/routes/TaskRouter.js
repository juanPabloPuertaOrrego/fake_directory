import React from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AddTaskComponent } from '../components/AddTaskComponent/AddTaskComponent'

export const TaskRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/add" element={<AddTaskComponent/>}/>
                <Route path="/edit/id" element={<h1>aqui va el componente que edita tareas</h1>}/>
                <Route path="/" element={<h1>componente de inicio</h1>}/>
            </Routes>
        </Router>
    )
}