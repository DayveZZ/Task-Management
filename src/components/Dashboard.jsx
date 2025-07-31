import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase tracking-widest text-[#c73138]">
        User's Dashboard
      </h1>

      <div className="bg-black/50 text-white p-4 mt-8 rounded-lg h-40">
        Recent To-Do
      </div>

      <div className="bg-black/50 text-white p-4 mt-8 rounded-lg h-40">
        Recent Notes
      </div>
    </div>
  );
};

export default Dashboard;
