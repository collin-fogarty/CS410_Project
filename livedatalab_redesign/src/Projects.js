import logo from './cornerlogo.png';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">

      <nav className='NavBar' role='navigation'>

        <div className='Pages'>
          <img src={logo} className="LiveDataLabLogo" alt="logo" />
          <a class="navbar-item" href="/">Home</a>
          <a class="navbar-item" href="/projects">Projects</a>
          <a class="navbar-item" href="/courses">Courses</a>
          <a class="navbar-item" href="/manage">Manage</a>
          <a class="navbar-item" href="/create">Create</a>
        </div>

      </nav>

      <header className="Header">
        <p>Your Projects</p>
        <div className='subtext'>No projects started</div>
      </header>

    </div>
  );
}

export default Projects;
