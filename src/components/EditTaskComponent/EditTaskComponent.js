import React, {useContext, useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TaskContext } from '../../context/TaskContext'

import { FormViewComponent } from '../FormViewComponent/FormViewComponent'

export const EditTaskComponent =()=>{
    const {tasks,setTasks} = useContext(TaskContext)
    const [task, setTask] = useState('');

    const {id}=useParams()
    const taskId = parseInt(id)

    const navigate = useNavigate()
   

    const [currentTask] = tasks.filter(taskToEdit =>taskToEdit.id===taskId)


    const handleOnCancel =()=>{
        navigate('/')
    }

    const handleOnChange =(e)=>{
        setTask(e.target.value)
    }

    const handleOnSave =(e)=>{
        e.preventDefault() 
        const taskEdited={
            id:currentTask.id,
            task:task
        }
        const newTasks = tasks.map(task => task.id===taskId? taskEdited : task)
        setTasks(newTasks)
        navigate('/')
    }

    useEffect(() => {
        setTask(currentTask.task)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])


    return(
        <FormViewComponent 
            value={task}
            handleOnCancel={handleOnCancel}
            handleOnChange={handleOnChange}
            handleOnSave={handleOnSave}
        />
    )
}