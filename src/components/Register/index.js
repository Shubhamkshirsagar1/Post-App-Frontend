import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register",
        register
      );
      toast.success(response.data.message);
      setLoading(false);
      navigate("/login");
      setRegister({
        name: "",
        username: "",
        email: "",
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
        Register on
        <span style={{ color: "var(--theme)" }}> PostApp.</span>
      </h1>
      <div className="input-wrapper">
        <div className="wrapper">
          <p className="input-label">Full Name</p>
          <input
            type="text"
            placeholder="Shubham Kshirsagar"
            value={register.name}
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
        </div>
        <div className="wrapper">
          <p className="input-label">Username</p>
          <input
            type="text"
            placeholder="Shubham"
            value={register.username}
            onChange={(e) =>
              setRegister({ ...register, username: e.target.value })
            }
          />
        </div>
        <div className="wrapper">
          <p className="input-label">Email</p>
          <input
            type="email"
            placeholder="Shubham@123"
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
        </div>
        <div className="wrapper">
          <p className="input-label">Password</p>
          <input
            type="password"
            placeholder="*********"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
        </div>
        <button className="btn" onClick={handleRegisterSubmit}>
          {loading ? "Loading.." : "Click to Register."}
        </button>
      </div>
    </div>
  );
};

export default Register;
