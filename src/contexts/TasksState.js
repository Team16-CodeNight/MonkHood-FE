import React, { useState } from "react";
import TasksContext from "./TasksContext";
import { useUserAuth } from "./UserAuthContextProvider";

export default function TasksState(props) {
  let [events, setEvents] = useState([]);
  const { apiCalendar } = useUserAuth();

  const getEventsArray = (eventsArray) => {
    let newEventsArray = [];
    for (let index = 0; index < eventsArray.length; index++) {
      let currentDate = new Date();
      let startDate = new Date(eventsArray[index].start.dateTime);
      let endDate = new Date(eventsArray[index].end.dateTime);
      if (
        startDate.getDate() === currentDate.getDate() &&
        endDate.getDate() === currentDate.getDate()
      ) {
        newEventsArray.push({ startDate, endDate });
      }
    }
    setEvents(newEventsArray);
  };

  const schedulEvent = (event) => {};

  const getEvents = async () => {
    apiCalendar
      .listUpcomingEvents(50)
      .then(({ result }) => {
        getEventsArray(result.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TasksContext.Provider value={{ events, setEvents, getEvents }}>
      {props.children}
    </TasksContext.Provider>
  );
}
