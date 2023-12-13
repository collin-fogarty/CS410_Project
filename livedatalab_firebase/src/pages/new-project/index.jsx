import { useState } from "react";
import { useAddProject } from "../../hooks/useAddProject";
import { useGetCourses } from "../../hooks/useGetCourses";

import Modal from "react-modal";

import "./styles.css";

export const NewProject = ({ isOpen, onClose }) => {
  const { addProject } = useAddProject();
  const { courses } = useGetCourses();

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

    setProjectName("");
    setProjectDescription("");
    returnToButtons("");
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
            const { courseName } = course;

            return <option>{courseName}</option>;
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
        <button className="cancel" onClick={returnToButtons}>
          {" "}
          Cancel
        </button>
      </form>
    </Modal>
  );
};
