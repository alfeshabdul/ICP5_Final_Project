import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Signup.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const signUp = async () => {
    const response = await axios.post("/signup", {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    });
    if (!name) {
      toast.error("name is requred", {
        position: "top-center",
        autoclose: 1000
      });
    } else if (!email) {
      toast.error("email field is requred", {
        position: "top-center",
        
      });
    } else if (!password) {
      toast.error("email field is requred", {
        position: "top-center",
        
      });
    } else if (!password) {
      toast.error("email field is requred", {
        position: "top-center",
        
      });
    }
    else if(response.data.success){
      toast.success("USER REGISTERED SUCCESSFULLY", {
        position: "top-center",
        
      });
      window.location.href = "/login";
    }
  };

  return (
    <div>
      <div className="signup-div">
        <h3 className="signup-title">Signup</h3>

        <div className="input-div">
          <label className="input-label">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input-field"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <label className="input-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <label className="input-label">Mobile</label>
          <input
            type="text"
            placeholder="Enter your mobile"
            className="input-field"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>

        <button type="button" className="signup-btn" onClick={signUp}>
          Signup
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
