import React from "react";
import { useUserAuth } from "../../../contexts/UserAuthContextProvider";

import styles from "./Tasks.module.css";

const Tasks = () => {
  const { userData } = useUserAuth();
  return <div className={styles.taskContainer}></div>;
};

export default Tasks;
