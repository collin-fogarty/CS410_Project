import { useState } from "react";
import { useAddSubmission } from "../../hooks/useAddSubmission";
//import { useGetLeaderboards } from "../../hooks/useGetLeaderboards";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

import "./styles.css";

export const NewSubmission = ({isOpen, onClose}) => {


  const { addSubmission } = useAddSubmission();
  //const { leaderboards } = useGetLeaderboards();
  const { projects } = useGetProjects();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [submissionName, setSubmissionName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    

    setTimeout(() => {
      addSubmission({
        submissionName,
        projectName,
      });

    }, 2000);

    setProjectName("");

    returnToButtons();


  };

  const returnToButtons = async () => {
    try {
      onClose();
   
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal show={true} isOpen={isOpen} onRequestClose={onClose}
    className="custom-modal"
    overlayClassName="custom-modal-overlay"
    >
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

        </Modal>
  
  );
};
