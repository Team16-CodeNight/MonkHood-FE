import React, { useState } from 'react'
import TasksContext from './TasksContext'

// task = {
//     title (string), duration(time), description(string)
// }

// schedule = {
//     title(string), start(date), end(date), description
// }




export default function TasksState(props) {


    let [tasks, setTasks] = useState([]);
    let [schedules, setSchedules] = useState([]);

    // setting dummyTasks
    setTasks([
        {title:"t1", duration:"2.5 hours", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {title:"t2", duration:"10 hours", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {title:"t3", duration:"10 hours", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {title:"t4", duration:"10 minutes", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    ]);

    const setDummySchedules = ()=>{
        for(let i=0; i<3; i++){
            for(let j=0; j<4; j++){
                let title = `t${i+" "+j}`;
                let start = new Date();
                let end = new Date();
                end.setHours(j+1);
                let description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
                addNewSchedule(title, end, description);
            }
        }
    }


    const addNewSchedule = (title, start, end, description)=>{
        let newSchedules = [...schedules, {title, start, end, description}];
        setSchedules(newSchedules);
    }

    const addNewTask = (title, duration, description)=>{
        let newTasks = [...tasks, {title, duration, description}];
        setSchedules(newTasks);
    }

  return (
    <TasksContext.Provider value = {{}}>
        {props.children}
    </TasksContext.Provider>    
  )
}
