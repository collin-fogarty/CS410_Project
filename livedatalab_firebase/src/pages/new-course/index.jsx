import { useState } from "react";
import { useAddCourse } from "../../hooks/useAddCourse";
import { useGetCourses } from "../../hooks/useGetCourses";

import "./styles.css";

import Modal from "react-modal";

export const NewCourse = ({isOpen, onClose}) => {
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
        <button className="cancel" onClick={returnToButtons}>
          {" "}
          Cancel
        </button>
      </form>
    </Modal>
  );
};
