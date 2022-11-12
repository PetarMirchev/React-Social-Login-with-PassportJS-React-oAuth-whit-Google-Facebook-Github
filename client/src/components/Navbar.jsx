import React from "react";
import { Link } from "react-router-dom";
//import avatarImg from "./pexels-matheus-bertelli-573299.jpg";

const Navbar = ({ user }) => {
  //Function for logout user from app
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Pepi App
        </Link>
      </span>
      {/* condition for render User Name, Avatar (yes user) */}
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        // (no user) go to login
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
