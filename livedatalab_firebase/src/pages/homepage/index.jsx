import "./styles.css";

import { Navbar } from "../../components/Navbar";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetSubmissions } from "../../hooks/useGetSubmission";

import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Homepage = () => {
  const { submissions } = useGetSubmissions();
  const { name, userID } = useGetUserInfo();

  const { projects } = useGetProjects();

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState();

  return (
    <div className="Homepage">
      {<Navbar />}
      <div class="flex-parent-element">
        <div class="flex-child-element left">

          <div className="projects">
            <h2>Your Projects</h2>
            <table className="projectList">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              {projects.map((project) => {
                const { projectName, projectDesc, course } = project;

                return (
                      <tr>
                        <td>{projectName}</td>
                        <td>{projectDesc}</td>
                      </tr>
                );
              })}
              </tbody>
            </table>
          </div>
          <div className="linkedAccounts">
            <h2>Linked Accounts</h2>
            <div className="subtext">
              <p>Google</p> 
              <p>Name: {name}</p>
              <p>UserID: {userID} </p>
            </div>
          </div>
        </div>

        <div class="flex-child-element right">
          <header className="Search">
            <h2>Submission History</h2>

            <select className="searchSelector" value={select} onChange={e => setSelect(e.target.value)}>
              <option>Submission Name</option>
              <option>Project Name</option>
            </select>

            <Form>
              <InputGroup className="searchBar">
                <Form.Control onChange={(event) => setSearch(event.target.value)} placeholder="Search Submissions" />
              </InputGroup>
            </Form>

            <table className = "submissionHistory">
              <thead>
                <tr>
                  <th>Submission Name</th>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
            {submissions.filter((item) => {
              return search === '' ? item : select === 'Project Name' ? item.projectName.includes(search) : item.submissionName.includes(search);
            }).map((submission,index) => {
              const { submissionName, projectName } = submission;
              return (
                    <tr kay={index}>
                      <td>{submissionName}</td>
                      <td>{projectName}</td>
                    </tr>
              );
            })}
              </tbody>
            </table>

          </header>
        </div>
      </div>
    </div>
  );
};
