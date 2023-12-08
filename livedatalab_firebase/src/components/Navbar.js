import React, { useState } from "react";
//import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/cornerlogo.png";
import { signOut } from "firebase/auth";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { auth } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Pages">
      <img src={logo} className="LiveDataLabLogo" alt="logo" />
      <nav className="navbar" role="navigation">
        <ul>
          <li>
            <button>
            <Link className="navbar-item" to="/homepage">
              Home
            </Link></button>
            
          </li>
          <li>
            <button>
            <Link className="navbar-item" to="/projects">
              Projects
            </Link>
            </button>
            
          </li>
          <li>
            <button>
            <Link className="navbar-item" to="/courses">
              Courses
            </Link>
            </button>
            
          </li>
          <li>
            <button><Link className="navbar-item" to="/manage"> Manage</Link></button>
             
            
          </li>
          <li>
            <div class="dropdown">
              <button class="dropdown-toggle">Create</button>
              <div class="dropdown-menu">
                <Link to="/new-project">Project </Link>
                <Link to="/new-course">Course </Link>
                <Link to="/new-leaderboard">Leaderboard </Link>
              </div>
            </div>
          </li>
          
        </ul>
        <div className="profile">
              {" "}
              <img className="profile-photo" src={profilePhoto} />
              <p>User Name: {name}</p>
              <button className="sign-out-button" onClick={signUserOut}>
                Sign Out
              </button>
            </div>
      </nav>
    </div>
  );
};