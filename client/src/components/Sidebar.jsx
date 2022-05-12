import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../config";
const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col">
        <span className="text-center text-2xl p-2 font-medium my-5 bg-gray-300 cursor-pointer">
          ABOUT
        </span>
        <img
          src="https://images.unsplash.com/photo-1577049092957-b1debd998eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          className="rounded-lg"
        />
        <p className="my-2 leading-relaxed">
          View one of the museums' collections of modern and contemporary art in
          the United States and discover work by artists from around the world.
        </p>
      </div>
      <div className="flex flex-col">
        <span className="text-center m-2 font-medium bg-gray-300 p-2">
          CATEGORIES
        </span>
        <ul className="flex flex-col items-center space-y-4">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="cursor-pointer hover:text-gray-500">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
