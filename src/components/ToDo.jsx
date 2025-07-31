import React, { useState } from "react";

const ToDo = () => {
  const [show, setShow] = useState(false);
  // const [todo, setTodo] = useState([]);
  return (
    <>
      <div className="flex justify-between items-center bg-neutral-200 text-black  px-8 py-4 rounded">
        <h1>Welcome to To-Do</h1>
        <button
          onClick={() => setShow(true)}
          className="cursor-pointer shadow bg-neutral-700 text-white  rounded px-4 py-2"
        >
          Add Task
        </button>
      </div>

      {show && (
        <div className="todos">
          <div className="absolute bottom-1/2 right-[43.75%] translate-x-1/2 translate-y-1/2 shadow-lg p-8 rounded-lg w-[50%] flex flex-col gap-8 bg-neutral-950/90">
            <div className="">
              <h2>Task Title</h2>
              <input
                type="text"
                className="outline-none bg-neutral-400 py-2 px-4 rounded-4xl mt-2 w-full"
                placeholder="Type your task"
              />
            </div>

            <div className="flex justify-between gap-8 ">
              <div className="w-full">
                <h2>Select Date</h2>
                <input
                  type="date"
                  className="py-2 px-4 rounded-4xl mt-2 bg-white text-black w-full outline-none calendar-icon"
                  placeholder="Type your task"
                />
              </div>
              <div className="w-full">
                <h2>Select Priority</h2>
                <div className="relative w-full mt-2">
                  <select
                    name="priority"
                    className="appearance-none py-2 px-4 rounded-4xl  bg-white text-black w-full outline-none"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-sm">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 ">
              <button className="cursor-pointer shadow bg-neutral-900 text-white rounded w-20 px-4 py-2 ">
                Add
              </button>
              <button
                onClick={() => setShow(false)}
                className="cursor-pointer shadow bg-neutral-900 text-white rounded w-20 px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between bg-neutral-200 text-black p-4 rounded mt-8 h-40">
        <div className="w-19/20 py-2 h-full rounded flex flex-col">
          <div className="flex items-center gap-8">
            <h3 className="bg-neutral-300  px-4 py-2 rounded">mm/dd/yyyy</h3>
            <h3 className="bg-neutral-300  px-4 py-2 rounded">High</h3>
          </div>
          <span className="bg-neutral-400 flex items-center h-full px-4 py-2 mt-2 rounded">
            Hello
          </span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <button className="w-8 cursor-pointer">
            <img src="src\assets\circle-dark.svg" />
          </button>
          <button className="w-8 cursor-pointer">
            <img src="src\assets\edit-dark.svg" />
          </button>
          <button className="w-8 cursor-pointer">
            <img src="src\assets\trash-dark.svg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
