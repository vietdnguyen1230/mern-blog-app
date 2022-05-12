import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router";
import { axiosInstance } from "../config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <Header />
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="col-span-2">
          <Posts posts={posts} />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
