import React from "react";
import { Link } from "react-router-dom";
import avatarImg from "./pexels-matheus-bertelli-573299.jpg";

const Navbar = ({ user }) => {
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
            <img src={avatarImg} alt="" className="avatar" />
          </li>
          <li className="listItem">Random User Name</li>
          <li className="listItem">Logout</li>
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
