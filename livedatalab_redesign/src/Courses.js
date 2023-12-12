import logo from './cornerlogo.png';
import './Courses.css';

function Courses() {
  return (
    <div class="background-box">
    <div className="Courses">

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
        <p class="is-size-5 has-text-weight-bold">Courses You're Enrolled In</p>
        <div className='subtext'>No courses enrolled in</div>
        <p>All Courses</p>
        <div className='subtext'>No courses enrolled in</div>
      </header>
    </div>
    </div>
  );
}

export default Courses;
