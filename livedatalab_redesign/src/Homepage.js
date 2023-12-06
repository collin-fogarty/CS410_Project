import './Homepage.css';
import ReactSearchBox from "react-search-box";

function Homepage() {

  return (
    <div className="Homepage">

        <div class="flex-parent-element">
            <div class="flex-child-element left">
                    <p>Your Projects</p>
                    <div className='subtext'>No projects started</div>

                
                    <p>Linked Accounts</p>
                    <div className='subtext'>No Linked Accounts</div>
            </div>
            <div class="flex-child-element right">
                <header className="Search">
                    <p>Submission History</p>

                        <ReactSearchBox
                            placeholder="Create Date"
                            value="Doe"
                            callback={(record) => console.log(record)}
                        />

                    <div className='subtext'>No submissions are available or match the filter.</div>
                </header>
            </div>
        </div>

    </div>
  );
}

export default Homepage;