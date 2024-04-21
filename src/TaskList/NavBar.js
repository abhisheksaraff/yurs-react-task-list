import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className = "NavBar">
      <h1>Your Tasks</h1>
      <div className = "navigation-buttons">
        <Link to="/">Home</Link>
        <Link to="/CompletedTasks">Completed Tasks</Link>
        <Link to="/TodoTasks">Todo Tasks</Link>
      </div>
    </div>
  )
};

export default NavBar;
