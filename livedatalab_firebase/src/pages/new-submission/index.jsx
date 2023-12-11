import { useState } from "react";
import { useAddSubmission } from "../../hooks/useAddSubmission";
//import { useGetLeaderboards } from "../../hooks/useGetLeaderboards";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export const NewSubmission = () => {
  const { addSubmission } = useAddSubmission();
  //const { leaderboards } = useGetLeaderboards();
  const { projects } = useGetProjects();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [submissionName, setSubmissionName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addSubmission({
      submissionName,
      projectName,
    });

    setProjectName("");
    navigate("../homepage");
  };

  const returnToButtons = async () => {
    try {
      navigate("../homepage");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new-submission">
      <div className="container">
        <h1> Create a New Submission</h1>
        <form className="add-submission" onSubmit={onSubmit}>
          <label for="project">Project (please select)</label>
          <select
            name="project"
            id="project"
            onChange={(e) => setProjectName(e.target.value)}
          >
            {projects.map((project) => {
              const { projectName } = project;

              return <option>{projectName}</option>;
            })}
          </select>{" "}
          <br></br>
          <input
            type="text"
            placeholder="New Submission"
            value={submissionName}
            required
            onChange={(e) => setSubmissionName(e.target.value)}
          />
          <br></br>
          <button type="submit"> Create</button>
          <button className="cancel" onClick={returnToButtons}>
            {" "}
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
