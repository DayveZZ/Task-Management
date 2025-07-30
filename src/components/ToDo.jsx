import React, { useState } from "react";

const ToDo = () => {
  const [show, setShow] = useState(false);
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
        <div className="todo shadow-lg p-4 rounded-lg w-[50%] flex flex-col gap-8 border border-neutral-800 bg-neutral-600">
          <div>
            <h2>Task Title</h2>
            <input
              type="text"
              className="outline-none bg-neutral-800 py-2 px-4 rounded-4xl mt-2 w-full"
              placeholder="Type your task"
            />
          </div>
          <div className="flex justify-between gap-8">
            <div className="w-full">
              <h2>Task Title</h2>
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
          <div className="m-auto flex gap-16">
            <button className="cursor-pointer shadow bg-neutral-700 text-white rounded w-20 px-4 py-2 ">
              Add
            </button>
            <button
              onClick={() => setShow(false)}
              className="cursor-pointer shadow bg-neutral-700 text-white rounded w-20 px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ToDo;
