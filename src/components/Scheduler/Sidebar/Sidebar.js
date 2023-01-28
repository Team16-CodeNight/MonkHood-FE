import React from "react";

import AddEventButton from "./AddEventButton";
import styles from "./Sidebar.module.css";

const handleAddEvent = () => {
  console.log("event Clicked");
};

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <AddEventButton handleAddEvent={handleAddEvent} />
    </div>
  );
};

export default Sidebar;
