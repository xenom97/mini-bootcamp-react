import { useState } from "react";
import BaseInput from "../components/Base/Input";
import BaseButton from "../components/Base/Button";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      // TODO; Simpan current user data ke Context
      window.alert("Login Success");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container login-container">
      <h1>Login Page</h1>
      <BaseInput
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <BaseInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <BaseButton onClick={handleLogin}>Login</BaseButton>
    </div>
  );
};

export default Login;
