import React, { useState } from "react";
//import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/cornerlogo.png";
import { signOut } from "firebase/auth";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { auth } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { NewSubmission } from "../pages/new-submission";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const[isFormOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };

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
                <div>
                  <button onClick={openForm}>Submission </button>
                <NewSubmission isOpen={isFormOpen} onClose={closeForm}/>
              
              </div>
            </div>
            </div>
          </li>
          
        </ul>
        <div className="profile">
            {" "}
            <img className="Navbar_profile-photo" src={profilePhoto} />
            <button className="sign-out-button" onClick={signUserOut}>
              Sign Out
            </button>
        </div>
        <div className="profile-username">
          <p>{name}</p>
        </div>
      </nav>
    </div>
  );
};
