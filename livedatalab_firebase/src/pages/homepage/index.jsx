import "./styles.css";
import ReactSearchBox from "react-search-box";

import { Navbar } from "../../components/Navbar";
import { useGetProjects } from "../../hooks/useGetProjects";

export const Homepage = () => {

    const { projects } = useGetProjects();
  return (
    <div className="Homepage">
      {<Navbar />}
      <div class="flex-parent-element">
        <div class="flex-child-element left">
          <h2>Your Projects</h2>
          <div className="projects">
            <ul>
              {projects.map((project) => {
                const { projectName, projectDesc, course } = project;

                return (
                  <li>
            <p>{projectName}: {projectDesc}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <h2>Linked Accounts</h2>
          <div className="subtext">No Linked Accounts</div>
        </div>
        <div class="flex-child-element right">
          <header className="Search">
            <p>Submission History</p>

            <ReactSearchBox
              placeholder="Create Date"
              value="Doe"
              callback={(record) => console.log(record)}
            />

            <div className="subtext">
              No submissions are available or match the filter.
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
