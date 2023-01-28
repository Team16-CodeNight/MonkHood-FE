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

  const addEventToGoogleCalendar = (todo, startTime, endTime)=>{ //call by refrence
    apiCalendar.create({
      summary:todo.title,
      description:todo.description,
      start: {
        dateTime : startTime
      },
      end : {
        dateTime : endTime
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
