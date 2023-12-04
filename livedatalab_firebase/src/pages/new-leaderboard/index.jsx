import { useState } from "react";
import { useAddLeaderboard } from "../../hooks/useAddLeaderboard";
//import { useGetLeaderboards } from "../../hooks/useGetLeaderboards";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { auth } from "../../config/firebase-config";

export const NewLeaderboard= () => {
  const { addLeaderboard } = useAddLeaderboard();
  //const { leaderboards } = useGetLeaderboards();
  const { projects } = useGetProjects();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [columnNames, setColumnNames] = useState("");
  const [rankingCol, setRankingCol] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    addLeaderboard({
      projectName,
      columnNames,
      rankingCol
    });

    setProjectName("")
    setColumnNames("")
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
      <div className="new-leaderboard">
        <div className="container">
          <h1> Create a New Leaderboard</h1>
          <form className="add-leaderboard" onSubmit={onSubmit}>
          <label for="project">Project (please select)</label>
            <select
              name="project"
              id="project"
              onChange={(e) => setProjectName(e.target.value)}
            >
              {projects.map((project) => {
            const { projectName } =
              project;

            return (
              <option>
                {projectName}
              </option>
            );
          })}
            </select>{" "}
            <br></br>
            <input
              type="text"
              placeholder="New Column Name"
              value={columnNames}
              required
              onChange={(e) => setColumnNames(e.target.value)}
            />
            <br></br>
            <label for="rankingCol">Ranking Column</label>
            <select
              name="rankingCol"
              id="project"
              onChange={(e) => setRankingCol(e.target.value)}
            >
              {projects.map((project) => {
            const { projectName } =
              project;

            return (
              <option>
                {projectName}
              </option>
            );
          })}
            </select>
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

  );
};
