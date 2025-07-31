import React from "react";
import { Routes, Route, Link } from "react-router";
import Dashboard from "./Dashboard";
import ToDo from "./ToDo";
import Notes from "./Notes";
import User from "./User";
import Settings from "./Settings";

// ICONS
import { IoMdSettings, IoMdHelpCircle, IoIosSearch } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { FaNoteSticky } from "react-icons/fa6";
const Nabar = () => {
  return (
    <>
      <div className="flex">
        <div className="h-dvh sticky top-0 p-4">
          <div className="bg-black/60 h-full rounded-2xl flex flex-col items-center gap-8 px-4 py-8">
            <h1 className="flex items-center justify-center text-3xl">
              T<span className="text-[#c73138] text-sm">M</span>
            </h1>
            <div className="flex flex-col justify-between h-full">
              <ul className="nav-list flex flex-col gap-4">
                <li>
                  <Link to="/dashboard">
                    <MdDashboard />
                  </Link>
                </li>
                <li>
                  <Link to="/todo">
                    <LuListTodo />
                  </Link>
                </li>
                <li>
                  <Link to="/notes">
                    <FaNoteSticky />
                  </Link>
                </li>
              </ul>
              <ul className="nav-list flex flex-col gap-4">
                <li>
                  <Link>
                    <IoMdSettings />
                  </Link>
                </li>
                <li>
                  <Link>
                    <IoMdHelpCircle />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="h-20  px-8 flex items-center justify-between sticky top-0">
            <h1 className="text-[#c73138] text-xl">
              Welcome, <span className="text-white uppercase">User</span>
            </h1>
            <div className="search bg-black/40 rounded-3xl w-1/3 flex justify-between items-center px-4">
              <input
                type="text"
                placeholder="Search"
                className="p-2 text-white outline-0 border-0"
              />
              <IoIosSearch />
            </div>
            <button className="w-12 cursor-pointer">
              <img src="src\assets\user-light.svg" className="opacity-80" />
            </button>
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
