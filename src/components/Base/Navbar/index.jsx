import { useContext } from "react";
import BaseButton from "../Button";
import AuthContext from "../../../context/AuthContext";

import "./index.css";
import { useNavigate } from "react-router-dom";

const BaseNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav>
      <h1>Notes App</h1>

      <div className="navbar-info">
        <p>Hi, {user?.username}</p>
        <BaseButton onClick={handleLogout}>Logout</BaseButton>
      </div>
    </nav>
  );
};

export default BaseNavbar;
