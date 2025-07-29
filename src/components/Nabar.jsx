import React from "react";
import { Routes, Route, Link } from "react-router";
import Dashboard from "./Dashboard";
import ToDo from "./ToDo";
import Notes from "./Notes";
import User from "./User";
import Settings from "./Settings";

const Nabar = () => {
  return (
    <div className="h-screen">
      <div className="top-bar bg-neutral-900 py-4 px-8 fixed top-0 w-full flex items-center justify-between shadow-lg z-1 ">
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
      </div>
    </div>
  );
};

export default Nabar;
