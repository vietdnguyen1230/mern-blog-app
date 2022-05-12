import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import { Context } from "../context/Context";
import { axiosInstance } from "../config";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/posts/" + path);
      setPost(res.data);
      // setTitle(res.data.title);
      // setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`/posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       desc,
  //     });
  //     setUpdateMode(false);
  //   } catch (err) {}
  // };

  return (
    <div className="flex">
      <div className="p-5">
        {post.photo && (
          <img
            className="w-[100%] h-[300px] rounded-lg object-cover"
            src={post.photo}
            alt=""
          />
        )}
        <h1 className="text-center m-3 font-semibold">
          {post.title}
          {post.username === user?.username && (
            <div className="float-right space-y-2">
              {/* <PencilAltIcon
                className="w-6 cursor-pointer"
                // onClick={() => setUpdateMode(true)}
              /> */}
              <TrashIcon
                className="w-6 cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          )}
        </h1>
        <div className="flex justify-between mt-10 mb-5">
          <span>
            Author:
            <b className="ml-2">
              <Link to={`/?user=${post.username}`} className="link">
                <b> {post.username}</b>
              </Link>
            </b>
          </span>
          <span> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="leading-relaxed">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
