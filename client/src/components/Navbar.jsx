import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="w-full flex sticky top-0 z-10 items-center justify-evenly bg-white">
      <div className="flex p-5">
        <ul className="flex space-x-5">
          <li className="cursor-pointer hover:text-gray-400">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">ABOUT</li>
          <li className="cursor-pointer hover:text-gray-400 hidden md:inline">
            CONTACT
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li
            className={user ? `hidden` : `cursor-pointer hover:text-gray-400`}
          >
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>{" "}
          <li className="cursor-pointer hover:text-gray-400">
            <Link
              className="link"
              to={!user && `/login`}
              onClick={user && handleLogout}
            >
              {user ? "LOG OUT" : "LOG IN"}
            </Link>
          </li>
          {/* {user && (
            <li className="cursor-pointer hover:text-gray-400">LOGOUT</li>
          )} */}
        </ul>
      </div>
      <div className="flex">
        {user ? (
          <Link className="flex items-center" to="/settings">
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <p className="pl-5">{user.username}</p>
          </Link>
        ) : (
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
