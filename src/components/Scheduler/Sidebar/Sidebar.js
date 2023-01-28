import React from "react";
import { PlusSmIcon } from "@heroicons/react/solid";

import AddEventButton from "./AddEventButton";
import styles from "./Sidebar.module.css";

const handleAddEvent = () => {
  console.log("event Clicked");
};

const Sidebar = ({ tab }) => {
  return (
    <div className={styles.container}>
      {tab == 1 && <AddEventButton handleAddEvent={handleAddEvent} />}
      {tab == 2 && (
        <>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            <span>New Task</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
