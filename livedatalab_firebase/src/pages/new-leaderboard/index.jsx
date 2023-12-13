import { useState } from "react";
import { useAddLeaderboard } from "../../hooks/useAddLeaderboard";
import { useGetProjects } from "../../hooks/useGetProjects";
import Modal from "react-modal";

import "./styles.css";


export const NewLeaderboard= ({isOpen, onClose}) => {
  const { addLeaderboard } = useAddLeaderboard();
  const { projects } = useGetProjects();

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
      </Modal>

  );
};
