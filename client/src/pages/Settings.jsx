import React from "react";
import Navbar from "../components/Navbar";
import Setting from "../components/Setting";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="col-span-2">
          <Setting />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Settings;
