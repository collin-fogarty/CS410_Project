import "./styles.css";
import ReactSearchBox from "react-search-box";
import moment from "moment";

import { Navbar } from "../../components/Navbar";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetSubmissions } from "../../hooks/useGetSubmission";

import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export const Homepage = () => {
  const { submissions } = useGetSubmissions();
  const { name, userID } = useGetUserInfo();

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
                    <p>
                      {projectName}: {projectDesc}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <h2>Linked Accounts</h2>
          <div className="subtext">
            <p>Google</p> 
            <p>Name: {name}</p>
            <p>UserID: {userID} </p>
          </div>
        </div>
        <div class="flex-child-element right">
          <header className="Search">
            <p>Submission History</p>

            <ReactSearchBox
              placeholder="Create Date"
              value="Doe"
              callback={(record) => console.log(record)}
            />

            {submissions.map((submission) => {
              const { submissionName, projectName } = submission;

              return (
                <li>
                  <p>
                    {submissionName}: {projectName}
                  </p>
                </li>
              );
            })}
          </header>
        </div>
      </div>
    </div>
  );
};
