import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

const Single = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="col-span-2">
          <SinglePost />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Single;
