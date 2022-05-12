import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { axiosInstance } from "../config";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center bg-cover bg-[url('https://images.unsplash.com/photo-1534445291134-f70b7a81f691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]  ">
        <div className="w-[60%] p-5 bg-white mx-auto rounded-3xl">
          <h1 className="text-2xl font-bold mx-5">Register</h1>
          <form onClick={handleSubmit} className="flex flex-col flex-wrap mt-5">
            <input
              className="flex-1 min-w-[40%] mx-5 my-2 p-2 border"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              className="flex-1 min-w-[40%] mx-5 my-2 p-2 border"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="flex-1 min-w-[40%] mx-5 my-2 p-2 border"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className=" bg-teal-500 text-white rounded-lg my-5 w-[40%] font-medium mx-auto py-3 hover:bg-teal-800 duration-200">
              Register
            </button>
            {error && (
              <span className="text-center text-red-500 mb-3">
                Something went wrong!
              </span>
            )}

            <div className="mx-5">
              Already registered?{" "}
              <Link className="link" to="/login">
                <span className="font-semibold underline cursor-pointer ml-2">
                  Log in
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
