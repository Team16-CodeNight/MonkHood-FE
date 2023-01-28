import React, { useContext } from "react";
import SchedulerNavbar from "../SchedulerNavbar";
import Calender from "../Calender/Calender";
import Sidebar from "../Sidebar/Sidebar";
import TasksContext from "../../../contexts/TasksContext";

import styles from "./SchedulerLayout.module.css";

const SchedulerLayout = () => {

  // call setDummySchedules first to set dummy schedules then call getSchedules

  let {getTasks, addNewTask, setDummySchedules, getSchedules, addNewSchedule} = useContext(TasksContext);
  
  return (
    <>
      <SchedulerNavbar />
      <div className={styles.container}>
        <Sidebar height="80vh" />
        <Calender />
      </div>
    </>
  );
};

export default SchedulerLayout;
