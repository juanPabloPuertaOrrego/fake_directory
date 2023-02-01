import React, {useContext} from 'react'
import { TaskContext } from '../../context/TaskContext';
import { TaskView } from './TaskView'
import { useNavigate } from 'react-router-dom';

export const TaskComponent =(props)=>{
    const {task, changeHandler} = props
    const {tasks, setTasks} = useContext(TaskContext);
    const navigate = useNavigate() 

    
    const handleOnComplete =(id)=> {
        console.log('hola', task);
        changeHandler((truco)=>!truco)
        task.done=true
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
        doneStyle={task.done?'line-through red' : 'none'}  
        />
    )
}