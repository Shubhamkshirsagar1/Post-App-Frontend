import React, { useEffect, useState } from "react";
import DashBoardHeader from "../DashboardHeader";
import "./styles.css";
import axios from "axios";
import { toast } from "react-toastify";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoding] = useState(false);
  const [createPost, setCreatePost] = useState({
    title: "",
    textBody: "",
  });
  const [editPost, setEditPost] = useState({
    title: "",
    textBody: "",
  });
  const [todoEditing, setTodoEditing] = useState(null);

  const HandleMyPosts = async () => {
    try {
      setLoding(true);
      const response = await axios.get("http://localhost:8000/api/my-posts", {
        withCredentials: true,
      });
      // console.log(response.data.data);
      setMyPosts(response.data.data);
      setLoding(false);
    } catch (error) {
      console.log(error);
      setLoding(false);
    }
  };

  const handleCreatePost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-post",
        createPost,
        {
          withCredentials: true,
        }
      );
      // console.log(response);
      HandleMyPosts();
      toast.success(response.data.message);
      setCreatePost({
        title: "",
        textBody: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (postId) => {
    // console.log(postId);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/edit-post",
        { data: editPost, postId },
        {
          withCredentials: true,
        }
      );
      // console.log(response);
      setEditPost(response.data.data);
      HandleMyPosts();
      setTodoEditing(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (postId) => {
    // console.log(postId);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/delete-post",
        { postId },
        {
          withCredentials: true,
        }
      );
      // console.log(response);
      HandleMyPosts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleMyPosts();
  }, []);

  //   useEffect(() => {
  //     console.log("myPosts", myPosts);
  //   }, [myPosts]);

  return (
    <div>
      <DashBoardHeader />
      <h1 style={{ margin: "15px", color: "var(--green)" }}>My Posts</h1>
      <div className="myposts-container">
        <div>
          <input
            type="text"
            className="my-posts-input"
            placeholder="Add Title.."
            value={createPost.title}
            onChange={(e) =>
              setCreatePost({ ...createPost, title: e.target.value })
            }
          />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          style={{ padding: "5px" }}
          placeholder="Add Description.."
          value={createPost.textBody}
          onChange={(e) =>
            setCreatePost({ ...createPost, textBody: e.target.value })
          }
        ></textarea>
        <button className="create-post" onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
      <div>
        <div className="allposts-container">
          {loading ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            <>
              {myPosts ? (
                <>
                  {myPosts?.map((post) => {
                    return (
                      <div key={post._id} className="all-posts-card">
                        {todoEditing === post._id ? (
                          <>
                            <input
                              type="text"
                              placeholder="Add Title.."
                              value={editPost.title}
                              onChange={(e) =>
                                setEditPost({
                                  ...editPost,
                                  title: e.target.value,
                                })
                              }
                            />
                            <input
                              type="text"
                              placeholder="Add Description.."
                              value={editPost.textBody}
                              onChange={(e) =>
                                setEditPost({
                                  ...editPost,
                                  textBody: e.target.value,
                                })
                              }
                            />
                          </>
                        ) : (
                          <>
                            <h2>{post.title}</h2>
                            <p>{post.textBody}</p>
                          </>
                        )}

                        <div className="btn-container">
                          {todoEditing === post._id ? (
                            <button
                              onClick={() => handleSave(post._id)}
                              className="edit-btn"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => setTodoEditing(post._id)}
                              className="edit-btn"
                            >
                              Edit
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(post._id)}
                            className="delete-btn"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h1>No Post Availabe! Create One.</h1>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyPosts;
