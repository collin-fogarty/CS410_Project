import { Navigate, useNavigate } from "react-router-dom";

export const Buttons = () => {
  const navigate = useNavigate();
  const navigateNewProject = async () => {
    try {
      navigate("../new-project");
    } catch (err) {
      console.log(err);
    }
  };
  const navigateNewCourse = async () => {
    try {
      navigate("../new-course");
    } catch (err) {
      console.log(err);
    }
  };
  const navigateNewLeaderboard = async () => {
    try {
      navigate("../new-leaderboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="buttons">
      <button className="add-new-project" onClick={navigateNewProject}>
        {""}
        Add New Project
      </button>
      <button className="add-new-course" onClick={navigateNewCourse}>
        {""}
        Add New Course
      </button>
      <button className="add-new-leaaderboard" onClick={navigateNewLeaderboard}>
        {""}
        Add New Leaderboard
      </button>
    </div>
  );
};
