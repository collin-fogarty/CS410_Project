import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useGetCourses } from '../../hooks/useGetCourses';
import { useGetProjects } from '../../hooks/useGetProjects';

export const CoursePage = () => {
  const { courseID } = useParams();
  const { courses } = useGetCourses();
  const { projects } = useGetProjects();
  let hasProjectsForCourse = false;

  return (
    <div className="Course">
      <Navbar />
      <header className="ProjectsHeader">
        <div className="Title" style={{ textAlign: 'left'}}>
          <p>{courseID}</p>
          <div className="Subtext" style={{ textAlign: 'left', fontSize: '16px', fontWeight: 'normal', paddingTop: '0.5%'}}>
        
          {courses.map((course) => {
            if (course.courseName === courseID) {
              return (
                <div key={course.courseName}>
                <p>{course.courseDesc}</p>
                <div className="Title">
                  <p>Projects in this Course</p>
                    </div>
                    <div>
                    <ul>
                      {projects.map((project) => {
                        const { projectName, projectDesc, course } = project;

                        if (course === courseID) {
                          hasProjectsForCourse = true;
                          return (
                            <li key={projectName}>
                              <p><span className='emphasized'>{projectName}: </span>{projectDesc}</p>
                            </li>
                          );
                        }
                        return null;
                      })}
                      {!hasProjectsForCourse && (
                        <li>
                          <p>This course does not have any projects.</p>
                        </li>
                      )}
                    </ul>
                    </div>
                </div>
              );
            }
            return null;
          })}
          </div>
        </div>
      </header>
    </div>
  );
};