import React, { useEffect, useState } from "react";
import DashBoardHeader from "../DashboardHeader";
import axios from "axios";
import "./styles.css";
import { toast } from "react-toastify";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoding] = useState(false);

  const handleAllPosts = async () => {
    try {
      setLoding(true);
      const response = await axios.get("http://localhost:8000/api/get-posts", {
        withCredentials: true,
      });
      // console.log(response.data.data);
      setAllPosts(response.data.data);
      toast.success(response.data.message, {
        autoClose: 1000,
      });
      setLoding(false);
    } catch (error) {
      console.log(error);
      setLoding(false);
    }
  };
  useEffect(() => {
    handleAllPosts();
  }, []);

  // useEffect(() => {
  //   console.log("allPosts", allPosts);
  // }, [allPosts]);

  return (
    <div>
      <DashBoardHeader />
      <h1 className="all-post-heading">All Posts</h1>
      <div className="allposts-container">
        {loading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            {allPosts?.map((post) => {
              return (
                <div key={post._id} className="all-posts-card">
                  <h2>{post.title}</h2>
                  <p>{post.textBody}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
