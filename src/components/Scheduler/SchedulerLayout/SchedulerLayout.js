import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import SchedulerNavbar from "../SchedulerNavbar/SchedulerNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Tasks from "../Tasks/Tasks";
import Calender from "../Calender/Calender";
import AfterWork from "../AfterWork/AfterWork";
import TasksContext from "../../../contexts/TasksContext";

import styles from "./SchedulerLayout.module.css";

const SchedulerLayout = () => {
  // call setDummySchedules first to set dummy schedules then call getSchedules

  let { getTasks, addNewTask, setDummySchedules, getSchedules, addNewSchedule } = useContext(TasksContext);
  let { component } = useParams();
  const [tab, setTab] = useState(1);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (component == "tasks") setTab(1);
    else if (component == "calender") setTab(2);
    else if (component == "after-work") setTab(3);
  }, [component]);

  return (
    <>
      <SchedulerNavbar tab={tab} />
      <div className={styles.container}>
        <Sidebar height="80vh" tab={tab} setTasks={setTasks} />
        {component == "tasks" && <Tasks tasks={tasks} />}
        {component == "calender" && <Calender />}
        {component == "after-work" && <AfterWork />}
      </div>
    </>
  );
};

export default SchedulerLayout;
