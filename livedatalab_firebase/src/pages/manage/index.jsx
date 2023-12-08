import './styles.css';
import {Navbar} from "../../components/Navbar";

export const Manage = () => {
  return (
    <div class="background-box">
    <div className="Courses">
    {<Navbar />}

      <header className="Header">
        <p class="is-size-5 has-text-weight-bold">Courses You Own</p>
        <div className='subtext'>You do not own any courses.</div>
        <p class="is-size-5 has-text-weight-bold">Projects You Own</p>
        <div className='subtext'>You do not own any projects.</div>
      </header>
    </div>
    </div>
  );
};
