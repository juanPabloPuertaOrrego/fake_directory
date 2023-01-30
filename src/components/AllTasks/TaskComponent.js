import React, {useState, useContext} from 'react'
import { TaskContext } from '../../context/TaskContext';
import { TaskView } from './TaskView'
import { useNavigate } from 'react-router-dom';

export const TaskComponent =(props)=>{
    const {task} = props
    const [done, setDone] = useState(false);
    const {tasks, setTasks} = useContext(TaskContext);
    const [tasksComplete, setTasksComplete] = useState(tasks);
  
    const navigate = useNavigate()


    const handleOnComplete =(id)=>{
        setDone(!done)
    }

    const handleOnDelete =(id)=>{
        const newTasks = tasks.filter(elemento=>elemento.id!==id)
        setTasks(newTasks)
    
    }

    const handleOnEdit =(id)=>{
        navigate(`/edit/${id}`)
    }

    return(
        <TaskView 
        task={task}
        handleOnComplete={handleOnComplete}
        handleOnDelete={handleOnDelete}  
        handleOnEdit={handleOnEdit}
        doneStyle={done?'line-through red' : 'none'}  
        />
    )
}