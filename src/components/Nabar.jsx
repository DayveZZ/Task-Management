import React from "react";

const Nabar = () => {
  return (
    <div className="navbar flex justify-between items-center bg-neutral-900 text-neutral-400 p-4 shadow-md px-20">
      <h1>TMS</h1>
      <ul className="nav-list flex space-x-6">
        <li>Dashboard</li>
        <li>ToDo</li>
        <li>Notes</li>
        <li>User</li>
      </ul>
    </div>
  );
};

export default Nabar;
