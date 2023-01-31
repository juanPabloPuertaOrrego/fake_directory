import React, {useState, useContext, useEffect} from 'react'
import { TaskContext } from '../../context/TaskContext';
import { TaskView } from './TaskView'
import { useNavigate } from 'react-router-dom';

export const TaskComponent =(props)=>{
    const [done, setDone] = useState(false);
    const {task, changeHandler} = props
    const {tasks, setTasks} = useContext(TaskContext);
    const navigate = useNavigate() 

        // useEffect(() => {
        //     handleOnComplete()
        // }, []);
    
    const handleOnComplete =(id)=> {
           setDone(true);
            // task.done = done;
            // const newTasks = tasks.filter(elemento => elemento.done===false);
            // setTasks(newTasks);
        console.log('hola', task);
        changeHandler((truco)=>!truco)
        task.done=true
        console.log('hola terminé', task);
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