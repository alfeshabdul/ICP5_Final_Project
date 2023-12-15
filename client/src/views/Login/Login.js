import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await axios.post("/login", {
      email: email,
      password: password,
    });

    if (!email) {
      toast.error("email field is requred", {
        position: "top-center",
        autoclose: 700
      });
    } else if (!password) {
      toast.error("email field is requred", {
        position: "top-center",
        autoclose: 700
      });
    } else if (!response.data.success) {
      toast.error("SIGNUP TO CONTINUE", {
        position: "top-center",
        autoclose: 700
      });
      window.location.href = "/signup";
    } else {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      toast("LOGGED IN SUCCESSFULLY", {
        position: "top-center",
    
      });

      window.location.href = "/mensproducts";
    }
  };

  // const logout = async() =>{
  //   localStorage.removeItem("user");
  //   window.location.href = "/";

  // }
  // const userlogout = () => {
  //   localStorage.removeItem("userlogininfo");
  //   history("/");

  return (
    <div>
      <div className="login-div">
        <h1 className="login-title">Login</h1>

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

        <button className="login-btn" onClick={login}>
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
