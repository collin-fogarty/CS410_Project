import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from "./pages/auth/index"
import { Buttons } from './pages/buttons/index';
import { NewProject } from './pages/new-project';
import { NewCourse } from './pages/new-course';
import { NewLeaderboard } from './pages/new-leaderboard';

//Auth component renders when we go to the initial route.   Auth page comes from auth/index.jsx
function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth />} /> 
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/new-course" element={<NewCourse />} />
        <Route path="/new-leaderboard" element={<NewLeaderboard />} />
      </Routes>
    </Router>
  </div>
}

export default App