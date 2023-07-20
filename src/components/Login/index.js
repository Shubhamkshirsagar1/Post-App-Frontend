import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    loginId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        login,
        { withCredentials: true }
      );
      // console.log(response);
      navigate("/dashboard/all-posts");
      toast.success(response.data.message);
      setLoading(false);
      setLogin({
        loginId: "",
        password: "",
      });
    } catch (error) {
      toast.error(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <h1 className="title">
        Login to
        <span style={{ color: "var(--theme)" }}> PostApp.</span>
      </h1>
      <div className="input-wrapper">
        <div className="wrapper">
          <p className="input-label">Email or Username</p>
          <input
            type="text"
            placeholder="Shubham@gmail.com or Shubham"
            value={login.loginId}
            onChange={(e) => setLogin({ ...login, loginId: e.target.value })}
          />
        </div>
        <div className="wrapper">
          <p className="input-label">Password</p>
          <input
            type="password"
            placeholder="*********"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <button className="btn" onClick={handleLoginSubmit}>
          {loading ? "Loading.." : "Click to Login."}
        </button>
      </div>
    </div>
  );
};

export default Login;
