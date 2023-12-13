import React from 'react';
import './styles.css';
import {Navbar} from "../../components/Navbar";
import { useGetCourses } from "../../hooks/useGetCourses";

export const Courses = () => {
  const { courses } = useGetCourses();

  return (
    
    <div className="Courses">
       {<Navbar />}

      <header className="ProjectsHeader">
        <div className = "Title">
          <p>Courses You're Enrolled In</p>
        </div>
        
        <ul>
          {courses.length > 0 ? (
            <div className="List">
            {courses.map((course) => {
              const { courseName, courseDesc} = course;

              return (
                <li className='ListedCourse' style = {{ textAlign: 'left', fontSize: '16px' }}>
                  <p><span className='emphasized'>{courseName}: </span>{courseDesc}</p>
                </li>
              );
            })}
            </div>
          ) : (
            <div>
              <div className="course-card" style={{ textAlign: 'left', fontSize: '18px' }}>
                You are not enrolled in any courses.
              </div>
            </div>
          )}
          </ul>
        
        <div className = "SecondTitle">
          <p>All Courses</p>
        </div>
        
        <ul>
          {courses.length > 0 ? (
            <div className="List">
            {courses.map((course) => {
              const { courseName, courseDesc} = course;

              return (
                <li className='ListedCourse' style = {{ textAlign: 'left', fontSize: '16px' }}>
                  <p><span className='emphasized'>{courseName}: </span>{courseDesc}</p>
                </li>
              );
            })}
            </div>
          ) : (
            <div>
              <div className="course-card" style={{ textAlign: 'left', fontSize: '18px' }}>
                There are no courses available.
              </div>
            </div>
          )}
          </ul>

      </header>
    
    </div>
  );
};
