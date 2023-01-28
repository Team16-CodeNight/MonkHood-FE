import React from "react";
import SchedulerNavbar from "../SchedulerNavbar";
import Calender from "../Calender/Calender";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./SchedulerLayout.module.css";

const SchedulerLayout = () => {
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
