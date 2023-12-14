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
  
  function handleSubmit(e) {
    e.preventDefault();
  }

  function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };

  return (
    <div className="Homepage">
      {<Navbar />}
      <div class="flex-parent-element">
        <div class="flex-child-element left">

          <div className="projects">
            <div className="homepageHeader">
              <p>Your Projects</p>
            </div>
            <table className="projectList">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Project Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              {projects.map((project) => {
                const { projectName, projectDesc, course } = project;

                return (
                      <tr>
                        <td>{course}</td>
                        <td>{projectName}</td>
                        <td>{truncate(projectDesc,20)}</td>
                      </tr>
                );
              })}
              </tbody>
            </table>
          </div>
          <div className="linkedAccounts">
            <div className="homepageHeader">  
              <p>Linked Accounts</p>
            </div>
            <div className="subtext">
              <p>Account: Google</p> 
              <p>Name: {name}</p>
              <p>UserID: {userID} </p>
            </div>
          </div>
        </div>

        <div class="flex-child-element right">
          <div className="submissionHistory">
            <div className="homepageHeader">
              <p>Submission History</p>
            </div>

            <div class="searchParent">
              <div class="searchChild">
                <select className="searchSelector" value={select} onChange={e => setSelect(e.target.value)}>
                  <option>Submission Name</option>
                  <option>Project Name</option>
                </select>
              </div>
              <div class="searchChild">
                <div>
                  <Form onSubmit={handleSubmit}>
                    <InputGroup className="searchBar">
                      <Form.Control size="lg" onChange={(event) => setSearch(event.target.value)} placeholder="Search Submissions" />
                    </InputGroup>
                  </Form>
                </div>
              </div>
            </div>
            <table className = "submissionHistory">
              <thead>
                <tr>
                  <th>Submission Name</th>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
            {submissions.filter((item) => {
              return search.toLowerCase() === '' ? item : select === 'Project Name' ? item.projectName.toLowerCase().includes(search.toLowerCase()) : item.submissionName.toLowerCase().includes(search.toLowerCase());
            }).map((submission,index) => {
              const { submissionName, projectName } = submission;
              return (
                    <tr kay={index}>
                      <td>{truncate(submissionName,40)}</td>
                      <td>{projectName}</td>
                    </tr>
              );
            })}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};
