import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/";
import { NewProject } from "./pages/new-project";
import { NewCourse } from "./pages/new-course";
import { NewLeaderboard } from "./pages/new-leaderboard";
import {Homepage} from "./pages/homepage";
import {Projects} from "./pages/projects";
import {Courses} from "./pages/courses";
import {CoursePage} from "./pages/coursesPage";
import {Manage} from "./pages/manage";
import {logo} from "./assets/cornerlogo.png";
import {Navbar} from "./components/Navbar";
import {NewSubmission} from "./pages/new-submission";
//Auth component renders when we go to the initial route.   Auth page comes from auth/index.jsx
function App() {
  return (
    <div className="App">
      
      <Router>
       
          <Routes>
          <Route path="/" exact element={<Auth />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursesPage/:courseID" element={<CoursePage />} />
            <Route path="/manage" element={<Manage />} />
           
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/new-course" element={<NewCourse />} />
            <Route path="/new-leaderboard" element={<NewLeaderboard />} />
            <Route path="/new-submission" element={<NewSubmission />} />

          </Routes>
    
      </Router>
    </div>
  );
}

export default App;
