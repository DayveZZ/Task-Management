import React, { useState } from "react";
import { FaRegCircle, FaCircle, FaRegEdit, FaTrash } from "react-icons/fa";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const ToDo = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [todoInput, setTodoInput] = useState([]);
  const [todoDate, setTodoDate] = useState([]);
  const [todoPriority, setTodoPriority] = useState([]);
  const [todo, setTodo] = useState([]);

  return (
    <>
      <div className="flex justify-between items-center border-b border-[#c73138] uppercase px-8 py-4">
        <h1>Welcome to your To-Do list</h1>
        <button
          onClick={() => setShow(true)}
          className="cursor-pointer bg-black/60 uppercase text-[#c73138]  rounded-full px-4 py-2"
        >
          Add Task
        </button>
      </div>
      {show && (
        <div className="todos">
          <div className="absolute bottom-1/2 right-[43.75%] translate-x-1/2 translate-y-1/2  p-8 rounded-lg w-[50%] flex flex-col gap-8 bg-neutral-950">
            <div className="flex items-center justify-between">
              <h1 className="text-center">Create Your To-Do Task</h1>
              <button
                onClick={() => setShow(false)}
                className="cursor-pointer p-3 text-2xl hover:text-[#c73137] duration-100 ease-in"
              >
                <IoMdClose />
              </button>
            </div>
            <input
              type="text"
              placeholder="Task Title"
              className="border-b border-[#c73138] outline-none leading-8 w-full"
              onChange={(e) => {
                console.log(e.target.value);
                setInput(e.target.value);
              }}
              value={input}
            />
            <div className="flex justify-between gap-8">
              <input
                type="date"
                className="border-b border-[#c73138] outline-none leading-8 w-full text-white/40 uppercase"
                onChange={(e) => {
                  console.log(e.target.value);
                  setDate(e.target.value);
                }}
                value={date}
              />
              <select
                type="date"
                className="border-b border-[#c73138] outline-none leading-8 w-full text-white/40 uppercase"
                onChange={(e) => {
                  console.log(e.target.value);
                  setPriority(e.target.value);
                }}
                value={priority}
              >
                <option
                  value="High"
                  className="bg-[#c73138] text-black border-2 border-black"
                >
                  High
                </option>
                <option value="Medium" className="bg-[#c73138] text-black">
                  Medium
                </option>
                <option value="Low" className="bg-[#c73138] text-black">
                  Low
                </option>
              </select>
            </div>

            <button
              className="cursor-pointer p-3 text-2xl hover:text-[#c73137] bg-black rounded-md duration-100 ease-in m-auto"
              onClick={() => {
                // setTodoInput([...todoInput, input]);
                // setTodoDate([...todoDate, date]);
                // setTodoPriority([...todoPriority, priority]);
                setTodo([...todo {input, date, priority}])
                setInput("");
                setDate("");
                setPriority("");
              }}
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
      )}
      {todo.map((ele, index) => {
        return (
          <div className="flex items-center justify-between bg-black/50 text-black p-4 rounded-lg mt-8 h-40">
            <div className="w-19/20 py-2 h-full rounded flex flex-col justify-between">
              <div className="flex items-center gap-8">
                {/* {todoDate.map((ele, index) => {
                  return (
                    
                  );
                })} */}
                <h3
                      className="bg-neutral-800 text-white  px-4 py-2 rounded-full"
                      key={todoDate.index}
                    >
                      {todoDate.ele}
                    </h3>
                {/* {todoPriority.map((ele, index) => {
                  return (
                    
                  );
                })} */}
                <h3
                      className="bg-neutral-800 text-white  px-4 py-2 rounded-full"
                      key={todoPriority.index}
                    >
                      {todoPriority.ele}
                    </h3>
              </div>
              <span
                className="bg-black/80 text-white flex items-center px-4 py-2 rounded-full"
                key={todoInput.index}
              >
                {todoInput.ele}
              </span>
            </div>

            <div className="todo-utility flex flex-col justify-between h-full">
              <button className="w-8 cursor-pointer">
                <FaRegCircle />
              </button>
              <button className="w-8 cursor-pointer">
                <FaRegEdit />
              </button>
              <button className="w-8 cursor-pointer">
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ToDo;
