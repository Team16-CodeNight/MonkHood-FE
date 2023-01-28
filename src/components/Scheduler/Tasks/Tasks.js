import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../../contexts/UserAuthContextProvider";
import { PlusSmIcon, PlusIcon } from "@heroicons/react/solid";
import { HiExternalLink, HiTrash, HiPencilAlt, HiClock } from "react-icons/hi";

import styles from "./Tasks.module.css";
import { update } from "../../../Util/DBUtil";
import AddTaskModal from "../Sidebar/AddTaskModal";

const Tasks = () => {
  const { userData } = useUserAuth();
  const [open, setOpen] = useState(false);

  const handleDeleteTask = async (id) => {
    try {
      let tasks = userData?.tasks;
      tasks = tasks.filter((task) => {
        // console.log("task", task);
        return task?.id !== id;
      });
      await update(tasks, userData?.urlName);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={`bg-white px-4 py-5 border-b border-gray-200 sm:px-6 ${styles.container}`}>
      {userData?.tasks?.length === 0 ? (
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No Tasks</h3>
          <p className="mt-1 text-sm text-gray-500">Get Started with your tasks.</p>
          <div className="mt-6">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={() => {
                setOpen(true);
              }}
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
              <span>New Task</span>
            </button>
            <AddTaskModal open={open} setOpen={setOpen} setTasks />
          </div>
        </div>
      ) : (
        <>
          <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Tasks</h3>
            </div>
            <div className="ml-4 mb-1 mt-1 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <PlusSmIcon className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
                <span>New Task</span>
              </button>
              <AddTaskModal open={open} setOpen={setOpen} setTasks />
            </div>
          </div>
          <fieldset className="border-t border-b border-gray-200">
            <div className="divide-y divide-gray-200">
              {userData?.tasks?.map((task) => {
                return (
                  <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-sm">
                      <label htmlFor="comments" className="font-medium text-gray-700 flex flex-row items-center">
                        {task?.title}
                        <button
                          type="button"
                          className="inline-flex items-center ml-2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-transparent hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <HiPencilAlt aria-hidden="true" />
                        </button>
                      </label>

                      <p id="comments-description" className="text-gray-500">
                        {task?.description}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <HiExternalLink className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Push to Calender
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center ml-4 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <HiClock className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Undo
                      </button>
                    </div>
                    <div className="ml-3 flex items-center h-5 flex-col">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded mb-5"
                      />
                      <button
                        type="button"
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={() => handleDeleteTask(task?.id)}
                      >
                        <HiTrash className="h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </>
      )}
    </div>
  );
};

export default Tasks;
