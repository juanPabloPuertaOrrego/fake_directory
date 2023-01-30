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

    const handleOnHistory =()=>{
        navigate('/taskHistory')
    }

    return(
        <>
        <div className='container d-flex align-items-center flex-column border border-success '>
            <div >
                <h1>My tasks</h1>
            </div>                
            <div>
                <button onClick={handleOnAddTask}>Go to add tasks</button>
            </div> 
            <div>
                <button onClick={handleOnHistory}>Go to hstory</button>            </div> 
            
        </div>
        <AllTaskComponent allTask={tasks}/> 
        </>
        )

}