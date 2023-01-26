import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom' //hook para navegar por params
import { TaskContext } from '../../context/TaskContext'
import { FormViewComponent } from '../FormViewComponent/FormViewComponent'

export const AddTaskComponent =() =>{
    const [value, setValue] = useState("")
    const {tasks,setTasks} = useContext(TaskContext);
    const navigate = useNavigate()

    //captura en el estado el valor que se está digitando en el input
    const handleOnChange =(e)=>{
        setValue(e.target.value)
    }

    const handleOnSave =(e)=>{
        e.preventDefault()
        const task = {
            id:Date.now(),
            task:value
        }
        setTasks([task,...tasks])
        navigate('/')
    }

    const handleOnCancel =(e)=>{
        e.preventDefault()
        navigate('/')
    }

    return (
        <FormViewComponent 
        value={value}
        handleOnChange={handleOnChange}
        handleOnSave={handleOnSave}
        handleOnCancel={handleOnCancel}
        />
    )
}