import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext'
import { AllTaskComponent } from './AllTaskComponent';

export const AllTasks =()=>{
    const {tasks} = useContext(TaskContext);
    const navigate = useNavigate()

    const handleOnAddTask =()=>{
        navigate('/add')
    }
    return(
        <div className='container'>
        <h1>My tasks</h1>
        <div>
            <button onClick={handleOnAddTask}>add a new task</button>
        </div>
        <AllTaskComponent allTask={tasks}/>
        </div>
        )

}