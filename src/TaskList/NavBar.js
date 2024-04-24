import { Link } from "react-router-dom";
import Tag from "./Tag";

function NavBar({ displayTags, selectedTags, setSelectedTags, currentPage, setCurrentPage }) {
  return (
    <div className="NavBar fixed-top">
      <div className="logo">My Tasks</div>
      <div className="navigation btn-group">
        <Link
          to="/"
          className="navigation-button badge rounded-pill border-light border border-1 fs-5"
          onClick={() => setCurrentPage("/")}
        >
          {currentPage === "/" && (
            <div className="pageName selected">All</div>
          )}
          {!(currentPage === "/") && (
            <div className="pageName not-selected">All</div>
          )}
        </Link>
        <Link
          to="/CompletedTasks"
          className="navigation-button badge rounded-pill border-white border border-1 fs-5"
          onClick={() => setCurrentPage("/CompletedTasks")}
        >
          {currentPage === "/CompletedTasks" && (
            <div className="pageName selected">Completed</div>
          )}
          {!(currentPage === "/CompletedTasks") && (
            <div className="pageName not-selected">Completed</div>
          )}
        </Link>
        <Link
          to="/TodoTasks"
          className="navigation-button badge rounded-pill border-white border border-1 fs-5"
          onClick={() => setCurrentPage("/TodoTasks")}
        >
          {currentPage === "/TodoTasks" && (
            <div className="pageName selected">Todo</div>
          )}
          {!(currentPage === "/TodoTasks") && (
            <div className="pageName not-selected">Todo</div>
          )}
        </Link>
      </div>
      <div className="tags">
        {displayTags.map((tag) => (
          <Tag key={tag} tag={tag} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
