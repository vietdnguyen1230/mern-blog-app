import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  // const PF = "http://localhost:5000/images/";

  return (
    <div className="flex flex-col">
      {post.photo && (
        <img
          className="object-cover rounded-lg"
          src={post.photo}
          alt={post.title}
        />
      )}
      <div className="flex flex-col items-center">
        <div className="cursor-pointer font-semibold space-x-5 mt-5">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="font-semibold my-2">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="my-2">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="my-5 overflow-hidden text-ellipsis line-clamp-4 leading-relaxed">
        {post.desc}
      </p>
      <p className="mb-5 cursor-pointer text-gray-500 hover:text-gray-800 duration-200">
        <Link to={`/post/${post._id}`} className="link">
          Learn More
        </Link>
      </p>
    </div>
  );
};

export default Post;
