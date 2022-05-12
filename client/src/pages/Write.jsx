import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Context } from "../context/Context";
import { axiosInstance } from "../config";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-5">
        {file && (
          <img
            className="object-contain max-h-[300px] rounded-lg"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-10 w-[500px] mx-auto"
        >
          <div className="flex px-2">
            <label htmlFor="fileInput">
              <PlusCircleIcon className="w-8 text-gray-500" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              className="w-full pl-5"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="pl-8 mt-5 ">
            <textarea
              className="w-full h-[300px] pl-7 mx-auto"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button
            className="px-5 my-5 py-2 w-[200px] mx-auto bg-teal-500 rounded-lg hover:bg-teal-800 text-white duration-200"
            type="submit"
          >
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
