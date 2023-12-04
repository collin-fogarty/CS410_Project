import { useState } from "react";
import { useAddProject } from "../../hooks/useAddProject";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetCourses } from "../../hooks/useGetCourses";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { auth } from "../../config/firebase-config";

export const NewProject = () => {
  const { addProject } = useAddProject();
  const { projects } = useGetProjects();
  const { courses } = useGetCourses();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDescription] = useState("");
  const [course, setCourse] = useState("");

  //const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addProject({
      projectName,
      projectDesc,
      course,
    });

    setProjectName("")
    setProjectDescription("")
    navigate("../buttons")
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

  const returnToButtons = async () => {
    try {
      navigate("../buttons");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="new-project">
        <div className="container">
          <h1> Create a New Project</h1>
          <form className="add-project" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              required
              onChange={(e) => setProjectName(e.target.value)}
            />
            <br></br>
            <input
              type="text"
              placeholder="Short Description"
              value={projectDesc}
              required
              onChange={(e) => setProjectDescription(e.target.value)}
            />{" "}
            <br></br>
            <label for="readme">Project README</label>
            <input
              type="file"
              id="readme"
              name="readme"
              placeholder="no file selected"
            />{" "}
            <br></br>
            <label for="starter">Project Starter Files (.zip only)</label>
            <input
              type="file"
              id="starter"
              name="starter"
              placeholder="no file selected"
            />{" "}
            <br></br>
            <label for="course">Course (optional)</label>
            <select
              name="course"
              id="course"
              onChange={(e) => setCourse(e.target.value)}
            >
              {courses.map((course) => {
            const { courseName } =
              course;

            return (
              <option>
                {courseName}
              </option>
            );
          })}
            </select>{" "}
            <br></br>
            <input
              type="checkbox"
              id="material"
              name="material"
              value="Materials"
            />
            <label>Auto-Recoomend Learning Materials</label> <br></br>
            <button type="submit"> Create</button>
            <button className="cancel" onClick={returnToButtons}> Cancel</button>
          </form>
        </div>
        {profilePhoto && (
          <div className="profile">
            {" "}
            <img className="profile-photo" src={profilePhoto} />
            <p>User Name: {name}</p>
            <button className="sign-out-button" onClick={signUserOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>

      <div className="projects">
        <h3> Projects</h3>
        <ul>
          {projects.map((project) => {
            const { projectName, projectDesc, course } =
              project;

            return (
              <li>
                {" "}
                <h4>Project Name: {projectName}</h4>
                <p>Project Desc: {projectDesc}
                </p>
                <p>Course: {course}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
