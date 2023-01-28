import React, { useState } from "react";
import { PlusSmIcon } from "@heroicons/react/solid";

import AddEventButton from "./AddEventButton";
import AddTaskModal from "./AddTaskModal";
import styles from "./Sidebar.module.css";

const handleAddEvent = () => {
  console.log("event Clicked");
};

const Sidebar = ({ tab }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      {tab == 1 && (
        <>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            <span>New Task</span>
          </button>
          <AddTaskModal open={open} setOpen={setOpen} setTasks/>
        </>
      )}
      {tab == 2 && <AddEventButton handleAddEvent={handleAddEvent} />}
    </div>
  );
};

export default Sidebar;
