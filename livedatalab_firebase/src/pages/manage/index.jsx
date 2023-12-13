import React from 'react';
import './styles.css';
import {Navbar} from "../../components/Navbar";
import { useGetCourses } from "../../hooks/useGetCourses";
import { useGetProjects } from '../../hooks/useGetProjects';

export const Manage = () => {
  const { courses } = useGetCourses();
  const { projects } = useGetProjects();
  return (
    
    <div className="Manage">
       {<Navbar />}

      <header className="ProjectsHeader">

        <div className = "Title">
          <p>Courses You Own</p>
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
                You do not own any courses.
              </div>
            </div>
          )}
          </ul>

        <div className = "SecondTitle">
          <p>Projects You Own</p>
        </div>
        
        {projects.length > 0 ? (
          <div className="List">
          <ul>
            {projects.map((project) => {
              const { projectName, projectDesc} = project;

              return (
                <li className='ListedProject'>
                  <p><span className='emphasized'>{projectName}: </span>{projectDesc} | 
                  <span className='emphasized'> Rank: </span>4 | 
                  <span className='emphasized'> Username: </span>github-username | 
                  <span className='emphasized'> Submission Number: </span>4 | 
                  <span className='emphasized'> Score: </span>1</p>
                </li>
              );
            })}
          </ul>
          </div>
        ) : (
          <div>
              <div className="course-card" style={{ textAlign: 'left', fontSize: '18px' }}>
                You do not own any projects.
              </div>
            </div>
        )}

      </header>
    
    </div>
  );
};
