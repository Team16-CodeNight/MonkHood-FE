import React, { useState } from 'react'
import TasksContext from './TasksContext'

// task = {
//     title (string), duration(time), description(string)
// }

// schedule = {
//     title(string), start(date), end(date), description
// }




export default function TasksState(props) {

    let tmpTasks = [
        {title:"t1", duration:"2.5 hours", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {title:"t2", duration:"10 hours", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {title:"t3", duration:"10 hours", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {title:"t4", duration:"10 minutes", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    ]

    let [tasks, setTasks] = useState(tmpTasks);
    let [schedules, setSchedules] = useState([]);

    // setting dummyTasks

    const setDummySchedules = ()=>{
        let fakeSchedules = [];
        let title = "something";
        let description = "a random description";
        let startDate = new Date();
        let endDate = new Date();
        endDate.setHours(startDate.getHours()+1);
        fakeSchedules.push({title, description, startDate, endDate});
        startDate = new Date();
        startDate.setHours(startDate.getHours()+3);
        endDate = new Date();
        endDate.setHours(startDate.getHours()+1);
        fakeSchedules.push({title, description, startDate, endDate});
        setSchedules(fakeSchedules);
    }
    
    const addNewSchedule = (title, start, end, description)=>{
        let schedule = {title, start, end, description};
        setSchedules(schedules.concat(schedule));
    }
    
    const addNewTask = (title, duration, description)=>{
        let task = {title, duration, description}
        
        setTasks(tasks.concat(task));
    }
    
    const getTasks = ()=>{
        return tasks
    }
    
    const getSchedules = () =>{
        return schedules;
    }
    
    return (
    <TasksContext.Provider value = {{getTasks, addNewTask, setDummySchedules, getSchedules, addNewSchedule}}>
        {props.children}
    </TasksContext.Provider>    
  )
}
