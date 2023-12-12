import './styles.css';
import {Navbar} from "../../components/Navbar";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetCourses } from "../../hooks/useGetCourses"

export const Manage = () => {


  const { projects } = useGetProjects();
  const { courses } = useGetCourses();
  return (
    <div class="background-box">
    <div className="Courses">
    {<Navbar />}

      <header className="Header">
        <p class="is-size-5 has-text-weight-bold">Courses You Own</p>
        
        <div className="courses">
            <ul>
              {courses.map((courses) => {
                const { courseName, courseDesc} = courses;

                return (
                  <li>
            <p>{courseName}: {courseDesc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        <p class="is-size-5 has-text-weight-bold">Projects You Own</p>
        <div className="projects">
            <ul>
              {projects.map((project) => {
                const { projectName, projectDesc, course } = project;

                return (
                  <li>
            <p>{projectName}: {projectDesc}: {course} </p>
                  </li>
                );
              })}
            </ul>
          </div>
      </header>
    </div>
    </div>
  );
};
