import { useState } from "react";
import { useAddCourse } from "../../hooks/useAddCourse";
import { useGetCourses } from "../../hooks/useGetCourses";

import "./styles.css";

import Modal from "react-modal";

export const NewCourse = ({ isOpen, onClose }) => {
  const { addCourse } = useAddCourse();

  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addCourse({
      courseName,
      courseDesc,
    });

    setCourseName("");
    setCourseDescription("");
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
      <h1>Please add a new course</h1>
      <form className="add-course" onSubmit={onSubmit}>
        <label for="course">Course Name </label>
        <input
          name="course"
          type="text"
          placeholder="Input name here"
          value={courseName}
          required
          onChange={(e) => setCourseName(e.target.value)}
        />
        <br></br>
        <label for="coursedesc">Course Description</label>
        <input
          name ="coursedesc"
          type="text"
          placeholder="Input description here"
          value={courseDesc}
          required
          onChange={(e) => setCourseDescription(e.target.value)}
        />{" "}
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
