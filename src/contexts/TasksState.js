import React, { useState } from "react";
import TasksContext from "./TasksContext";
import { useUserAuth } from "./UserAuthContextProvider";

export default function TasksState(props) {
  let [events, setEvents] = useState([]);
  const { apiCalendar } = useUserAuth();

  const getEventsArray = (eventsArray) => {
    let newEventsArray = [];
    let firstDate = new Date();
    lastDate.setHours(9);
    lastDate.setMinutes(0);
    lastDate.setSeconds(0);
    lastDate.setMilliseconds(0);

    let lastDate = new Date();
    lastDate.setHours(11);
    lastDate.setMinutes(0);
    lastDate.setSeconds(0);
    lastDate.setMilliseconds(0);

    for(let i=0; i<eventsArray.length; i++){
      let event = eventsArray[i];
      let startDate = event.start.dayTime;
      if(startDate>firstDate && startDate<lastDate)
        newEventsArray.push(event);
    }

    return newEventsArray;
  };
  const getStartTime= (duration,events)=>{ //duration in ms
    console.log("called getstartTime",events);
    let endTime = new Date();
    let startTime = '';
    endTime.setHours(9);
    endTime.setMinutes(0);
    endTime.setMilliseconds(0);
    if(events.length==0)
      return endTime;
    
    console.log(events)

    for(let i=0; i<events.length; i++){
      startTime = new Date(events[i].start.dateTime);
      let diff =Math.abs(startTime-endTime);
      console.log(endTime, startTime, diff, duration);
      if(diff>=duration){
        return endTime;
      }else{
        endTime = new Date(events[i].end.dateTime);
      }
    }

    startTime.setHours(11);
    startTime.setMinutes(0);
    startTime.setMilliseconds(0);
    let diff = Math.abs(startTime-endTime);
    if(diff>=duration){
      return endTime;
    }

    return null;
  }
  const addEventToGoogleCalendar = async (todo, startTime, endTime)=>{ //call by refrence
    const events = await apiCalendar
    .listUpcomingEvents(50)
    console.log(events);
    const newStart = getStartTime(todo.duration*60000,events?.result?.items)
    const newEnd = new Date(newStart);
    newEnd.setMinutes(newEnd.getMinutes()+todo.duration);
    console.log(newStart+" this is new start");
    apiCalendar.createEvent({
      summary:todo.title,
      description:todo.description,
      start: {
        dateTime : newStart
      },
      end : {
        dateTime : newEnd
      }
    }, "primary").then((result)=>{
      console.log(result);
      todo.id = result.result.id;
    });
  }

  const deleteEventFromCalendar = (eventId)=>{
    apiCalendar.deleteEvent(eventId).then(console.log);
  }

  const getEvents = async () => {
    apiCalendar
      .listUpcomingEvents(50)
      .then(({ result }) => {
        setEvents(getEventsArray(result.items));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TasksContext.Provider value={{ events, setEvents, getEvents, addEventToGoogleCalendar, deleteEventFromCalendar }}>
      {props.children}
    </TasksContext.Provider>
  );
}
