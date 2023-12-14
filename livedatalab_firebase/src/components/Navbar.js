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
import { NewProject } from "../pages/new-project";
import { NewCourse } from "../pages/new-course";
import { NewLeaderboard } from "../pages/new-leaderboard";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();
  const onHomeClick = () => navigate("/homepage");
  const onProjectsClick = () => navigate("/projects");
  const onCoursesClick = () => navigate("/courses");
  const onManageClick = () => navigate("/manage");

  //handle Modal form open/close
  const [isSubFormOpen, setSubFormOpen] = useState(false);
  const [isProjFormOpen, setProjFormOpen] = useState(false);
  const [isCourseFormOpen, setCourseFormOpen] = useState(false);
  const [isLBFormOpen, setLBFormOpen] = useState(false);

  //submission form
  const openSubForm = () => {
    setSubFormOpen(true);
  };
  const closeSubForm = () => {
    setSubFormOpen(false);
  };

  //project form
  const openProjForm = () => {
    setProjFormOpen(true);
  };
  const closeProjForm = () => {
    setProjFormOpen(false);
  };

  //course form
  const openCourseForm = () => {
    setCourseFormOpen(true);
  };
  const closeCourseForm = () => {
    setCourseFormOpen(false);
  };

  //leaderboard form
  const openLBForm = () => {
    setLBFormOpen(true);
  };
  const closeLBForm = () => {
    setLBFormOpen(false);
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
            <button onClick={onHomeClick}>Home</button>
          </li>
          <li>
            <button onClick={onProjectsClick}>Projects</button>
          </li>
          <li>
            <button onClick={onCoursesClick}>Courses</button>
          </li>
          <li>
            <button onClick={onManageClick}>Manage</button>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropdown-toggle">Create</button>
              <div class="dropdown-menu">
                <button onClick={openCourseForm}>Course</button>
                <NewCourse
                  isOpen={isCourseFormOpen}
                  onClose={closeCourseForm}
                />

                <button onClick={openProjForm}>Project</button>
                <NewProject isOpen={isProjFormOpen} onClose={closeProjForm} />

                <button onClick={openLBForm}>Leaderboard</button>
                <NewLeaderboard isOpen={isLBFormOpen} onClose={closeLBForm} />

                <button onClick={openSubForm}>Submission </button>
                <NewSubmission isOpen={isSubFormOpen} onClose={closeSubForm} />
              </div>
            </div>
          </li>
        </ul>
        <div className="profile">
          {" "}
          <img className="Navbar_profile-photo" src={profilePhoto} />
          <p>{name}</p>
          <button className="sign-out-button" onClick={signUserOut}>
            Sign Out
          </button>
      
          
        
        </div>
        
      </nav>
    </div>
  );
};
