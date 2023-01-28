import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { update } from "../../../Util/DBUtil";
import { useUserAuth } from "../../../contexts/UserAuthContextProvider";
import TasksContext from "../../../contexts/TasksContext";

const AddTaskModal = ({ open, setOpen }) => {
  let {events, addEventToGoogleCalendar} = useContext(TasksContext);
  const cancelButtonRef = useRef(null);
  const { userData } = useUserAuth();
  // const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    duration: 0,
    category: "",
    description: "",
  });

  console.log("userData", userData);

  const clear = () => {
    setTask({
      id: "",
      title: "",
      duration: 0,
      category: "",
      description: "",
    });
  };

  const getStartTime= (duration)=>{ //duration in ms
    console.log("called getstartTime");
    let endTime = new Date();
    let startTime = '';
    endTime.setHours(9);
    endTime.setMinutes(0);
    endTime.setMilliseconds(0);
    if(events.length==0)
      return endTime;
      
    for(let i=0; i<events.length; i++){
      startTime = new Date(events[i].start.dateTime);
      let diff = endTime-startTime;
      if(diff>=duration){
        return endTime;
      }else{
        endTime = new Date(events[i].end.dateTime);
      }
    }

    startTime.setHours(11);
    startTime.setMinutes(0);
    startTime.setMilliseconds(0);
    let diff = endTime-startTime;
    if(diff>=duration){
      return endTime;
    }

    return null;
  }

  const handleAddTask = async () => {
    // console.log("userData", userData);
    try {
      // console.log("task", task);
      let newTaskArray = userData?.tasks;
      setTask({ ...task, id: uuidv4().slice(0, 8) });
      newTaskArray.push({ ...task, id: uuidv4().slice(0, 8) });
      // console.log("user id is:");
      // console.log(userData.urlName);
      await update(newTaskArray, userData.urlName);
      setOpen(false);
      
      // adding event into calendar
      let duration = task.duration*60000;
      let startTime = getStartTime(duration);
      console.log("return getstartTime");
      if(startTime){
        let endTime = new Date(startTime);
        endTime.setHours(endTime.getHours() + task.duration);
        addEventToGoogleCalendar(userData?.tasks, startTime, endTime);
      }else{
        console.log("cant add task");
      }
      
      clear();
    } catch (error) {
      alert(error.printStack());
    }
  };
  // console.log(userData);
  // <div className="flex-shrink-0">
  //   <button
  //     type="button"
  //     onClick={updateTask}
  //     className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //   >
  //     <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
  //     <span>New Task</span>
  //   </button>
  // </div>;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Task</h3>
                  <p className="mt-1 text-sm text-gray-500">Don't worry, we will take care of it for you!</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Add Sample Test Cases"
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="desc"
                        name="desc"
                        rows={3}
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={""}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="category"
                        id="category"
                        autoComplete="duration"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setTask({ ...task, category: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                      Duration (in mins)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="duration"
                        id="duration"
                        autoComplete="duration"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setTask({ ...task, duration: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm"
                  onClick={handleAddTask}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => {
                    setOpen(false);
                    clear();
                  }}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddTaskModal;
