import { useState } from "react";
import { useAddSubmission } from "../../hooks/useAddSubmission";
import { useGetProjects } from "../../hooks/useGetProjects";
import Modal from "react-modal";

import "./styles.css";

export const NewSubmission = ({ isOpen, onClose }) => {
  const { addSubmission } = useAddSubmission();
  //const { leaderboards } = useGetLeaderboards();
  const { projects } = useGetProjects();

  const [projectName, setProjectName] = useState("");
  const [submissionName, setSubmissionName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

      addSubmission({
        submissionName,
        projectName,
      });


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
    <Modal
      show={true}
      isOpen={isOpen}
      onRequestClose={onClose}
      className="custom-modal"
      overlayClassName="custom-modal-overlay"
    >
      <h1>Please add a submission</h1>
      <form className="add-submission" onSubmit={onSubmit}>
        <label for="project">Project (please select)   </label>
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
        <label for="">Submission Name</label>
        <input
          name = "submission"
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
