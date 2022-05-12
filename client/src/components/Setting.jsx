import React from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { axiosInstance } from "../config";

const Setting = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="flex flex-col p-5">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Update Your Account</span>
        <span className="text-red-500 font-semibold">Delete Account</span>
      </div>
      <form className="mt-5" onSubmit={handleSubmit}>
        <label className="font-semibold">Profile Picture</label>
        <div className="my-5 flex">
          <img
            src={file ? URL.createObjectURL(file) : PF + user.profilePic}
            alt=""
            className="rounded-full h-20 w-20"
          />
          <label htmlFor="fileInput">
            <UserCircleIcon className="w-8 text-gray-500 mt-5 cursor-pointer ml-5" />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            className="settingsPPInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="mt-10 align-self-center w-full py-3 border-none rounded-lg text-white bg-teal-500 cursor-pointer flex items-center justify-center hover:bg-teal-800 duration-200"
          type="submit"
        >
          Update
        </button>
        {success && (
          <span className="text-center text-green-500">
            Profile has been updated...
          </span>
        )}
      </form>
    </div>
  );
};

export default Setting;
