import { useState } from "react";
import { useAddCourse } from "../../hooks/useAddCourse";
import { useGetCourses } from "../../hooks/useGetCourses";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { auth } from "../../config/firebase-config";

export const NewCourse = () => {
  const { addCourse } = useAddCourse();
  const { courses } = useGetCourses();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDescription] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    addCourse({
      courseName,
      courseDesc,
    });

    setCourseName("")
    setCourseDescription("")
    navigate("../homepage")
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
      navigate("../homepage");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="new-course">
        <div className="container">
          <h1> Create a New Course</h1>
          <form className="add-course" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              required
              onChange={(e) => setCourseName(e.target.value)}
            />
            <br></br>
            <input
              type="text"
              placeholder="Short Description"
              value={courseDesc}
              required
              onChange={(e) => setCourseDescription(e.target.value)}
            />{" "}
            <br></br>
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

      <div className="courses">
        <h3> Courses</h3>
        <ul>
          {courses.map((course) => {
            const { courseName, courseDesc} =
              course;

            return (
              <li>
                {" "}
                <h4>Course Name: {courseName}</h4>
                <p>Course Desc: {courseDesc}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
