import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="my-5 flex flex-wrap pr-5 ">
        <span className="text-center text-2xl p-2 font-medium  w-full mb-5 bg-gray-300 cursor-pointer">
          COLLECTIONS
        </span>
        {posts.map((post) => (
         
         <Post post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
