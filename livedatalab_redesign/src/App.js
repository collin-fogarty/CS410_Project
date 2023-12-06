import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Courses from './Courses';
import Manage from './Manage';
import logo from './cornerlogo.png';

function App() {
    return (
        <Router>
            <div className="Home">
                <nav className='NavBar' role='navigation'>
                    <div className='Pages'>
                        <img src={logo} className="LiveDataLabLogo" alt="logo" />
                        <Link className="navbar-item" to="/home">Home</Link>
                        <Link className="navbar-item" to="/projects">Projects</Link>
                        <Link className="navbar-item" to="/courses">Courses</Link>
                        <Link className="navbar-item" to="/manage">Manage</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/manage" element={<Manage />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
