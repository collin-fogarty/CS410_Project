import './styles.css';
import {Navbar} from "../../components/Navbar";
import { useGetCourses } from "../../hooks/useGetCourses";

export const Courses = () =>{

  const { courses } = useGetCourses();
  return (
    
    <div class="background-box">
  
    <div className="Courses">
    {<Navbar />}

      <header className="Header">
        <p class="is-size-5 has-text-weight-bold">Courses You're Enrolled In</p>
        <div className="courses">
        <ul>
          {courses.map((course) => {
            const { courseName, courseDesc} =
              course;

            return (
              <li>
  
                <p>{courseName}-{courseDesc}</p>
        
              </li>
            );
          })}
        </ul>
      </div>
        <p>All Courses</p>
        <div className='subtext'>You are not enrolled in any courses.</div>
      </header>
    </div>
    </div>
  );
}

