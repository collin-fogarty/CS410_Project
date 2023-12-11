import './styles.css';
import {Navbar} from "../../components/Navbar";
import { useGetProjects } from "../../hooks/useGetProjects";

export const Projects = () => {
  const { projects } = useGetProjects();
  return (
    <div className="Projects">
       {<Navbar />}

      <header className="ProjectsHeader">
        <div className = "Title">
          <p>Projects you've started</p>
        </div>
        
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

        <div className='SecondTitle'>
            <p>Joined Projects</p>
            <p><span className='SecondSubtext'>You haven't joined any outside projects</span></p>
        </div>

      </header>
    
    </div>
  );
};