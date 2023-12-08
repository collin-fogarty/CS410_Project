import './styles.css';
import {Navbar} from "../../components/Navbar";
import { useGetProjects } from "../../hooks/useGetProjects";

export const Projects = () => {
  const { projects } = useGetProjects();
  return (
    <div className="Projects">
       {<Navbar />}

      <header className="Header">
      <div className="projects">
        <p>Your Projects</p>
            <ul>
              {projects.map((project) => {
                const { projectName, projectDesc, course } = project;

                return (
                  <li>
                <p>{projectName}: {projectDesc}</p>                  </li>
                );
              })}
            </ul>
          </div>
        
      </header>

    </div>
  );
};