import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className = "NavBar fixed-top">
      <div className="logo">My Tasks</div>
      <div className = "navigation">
        <Link to="/" className="navigation-button badge rounded-pill border-light border border-1 fs-5">All</Link>
        <Link to="/CompletedTasks" className="navigation-button badge rounded-pill border-white border border-1 fs-5">Completed</Link>
        <Link to="/TodoTasks" className="navigation-button badge rounded-pill border-white border border-1 fs-5">Todo</Link>
      </div>
    </div>
  )
};

export default NavBar;
