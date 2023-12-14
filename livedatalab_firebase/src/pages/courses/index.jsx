import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useGetCourses } from '../../hooks/useGetCourses';

export const Courses = () => {
  const { courses } = useGetCourses();

  return (
    <div className="Courses">
      <Navbar />

      <header className="ProjectsHeader">
        <div className="Title">
          <p>Courses You're Enrolled In</p>
        </div>
        
        <ul>
          {courses.length > 0 ? (
            <div className="List">
              {courses.map((course) => (
                <li className='ListedCourse' key={course.courseID} style={{ textAlign: 'left'}}>
                  <Link to={`/coursesPage/${course.courseName}`} style={{ textDecoration: 'none' }}>
                    <p><span className='emphasized'>{course.courseName}: </span>{course.courseDesc}</p>
                  </Link>
                </li>
              ))}
            </div>
          ) : (
            <div>
              <div className="course-card" style={{ textAlign: 'left', fontSize: '18px' }}>
                You are not enrolled in any courses.
              </div>
            </div>
          )}
        </ul>
      
        <div className="SecondTitle">
          <p>All Courses</p>
        </div>
        
        <ul>
          {courses.length > 0 ? (
            <div className="List">
              {courses.map((course) => (
                <li className='ListedCourse' key={course.courseID} style={{ textAlign: 'left'}}>
                  <Link to={`/coursesPage/${course.courseName}`} style={{ textDecoration: 'none' }}>
                    <p><span className='emphasized'>{course.courseName}: </span>{course.courseDesc}</p>
                  </Link>
                </li>
              ))}
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
