import React from "react";
import { Routes, Route, Link } from "react-router";
import Dashboard from "./Dashboard";
import ToDo from "./ToDo";
import Notes from "./Notes";
import User from "./User";
import Settings from "./Settings";

const Nabar = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/8 min-w-fit h-dvh bg-neutral-900 shadow sticky top-0">
          <h1 className="bg-neutral-950 w-full flex items-center justify-center h-20 text-lg">
            Task
            <span className="text-[#8d1010] text-sm"> Management</span>
          </h1>
          <ul className="nav-list flex flex-col gap-2 px-4 py-8">
            <li>
              <Link to="/dashboard">
                <img src="src\assets\home-light.svg" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <img src="src\assets\list-light.svg" />
                ToDo
              </Link>
            </li>
            <li>
              <Link to="/notes">
                <img src="src\assets\notes-light.svg" />
                Notes
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <div className="nav shadow-md sticky top-0">
            <div className="bg-neutral-900/80 h-20  px-8 flex items-center justify-between">
              <div className="search bg-neutral-50 rounded-3xl  w-100 flex justify-between items-center px-4">
                <input
                  type="text"
                  placeholder="search"
                  className="p-2 text-black outline-0 border-0"
                />
                <img src="src\assets\search-dark.svg" />
              </div>
              <button className="w-12 cursor-pointer">
                <img src="src\assets\user-light.svg" />
              </button>
            </div>
          </div>

          <div className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nabar;

{
  /* <div className="top-bar bg-neutral-900 py-4 px-8 fixed top-0 w-full flex items-center justify-between shadow-lg z-1 ">
        <h1 className="logo w-20">
          <Link to="/dashboard">
            <img src="src\assets\Task_Management_Logo.png" />
          </Link>
        </h1>
        <button className="w-10 cursor-pointer">
          <img src="src\assets\user-light.svg" alt="user" />
        </button>
      </div>

      <div className="">
        <div className="bg-neutral-800 text-neutral-400 px-4 pt-24 pb-8 shadow-md gap-4 flex flex-col justify-between fixed h-full">
          <ul className="nav-list flex flex-col gap-2">
            <li>
              <Link to="/dashboard">
                <img src="src\assets\home-light.svg" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/todo">
                <img src="src\assets\list-light.svg" />
                ToDo
              </Link>
            </li>
            <li>
              <Link to="/notes">
                <img src="src\assets\notes-light.svg" />
                Notes
              </Link>
            </li>
          </ul>
          <button className="settings cursor-pointer ">
            <Link to="/settings">
              <img src="src\assets\bars-light.svg" />
              Settings
            </Link>
          </button>
        </div>

        <div className="content w-full pl-68 pt-24 pb-8 pr-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div> */
}
