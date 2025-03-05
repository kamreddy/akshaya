import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Enter valid credentials!");
    }
  };

  return (
    <div className="container text-light text-center mt-5">
      <h2>🔑 Login to StreamFlix</h2>
      <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-warning" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
