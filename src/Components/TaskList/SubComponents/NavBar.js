import { Link } from "react-router-dom";
import Tag from "./Tag";
import createTask from "../createTask";

function NavBar({
  address,
  displayTags,
  selectedTags,
  setSelectedTags,
  currentPage,
  setCurrentPage,
  blurPage,
  displayTaskPopUp,
  setTaskToEdit,
}) {
  return (
    <div className="NavBar fixed-top">
      <div className="logo">My Tasks</div>
      <div className="navigation btn-group">
        <Link
          to={address}
          className="navigation-button badge rounded-pill border-light border border-1 fs-5"
          onClick={() => setCurrentPage(address)}
        >
          {currentPage === address && (
            <div className="pageName selected">All</div>
          )}
          {!(currentPage === address) && (
            <div className="pageName not-selected">All</div>
          )}
        </Link>
        <Link
          to={address + "CompletedTasks"}
          className="navigation-button badge rounded-pill border-white border border-1 fs-5"
          onClick={() => setCurrentPage(address + "CompletedTasks")}
        >
          {currentPage === address + "CompletedTasks" && (
            <div className="pageName selected">Completed</div>
          )}
          {!(currentPage === address + "CompletedTasks") && (
            <div className="pageName not-selected">Completed</div>
          )}
        </Link>
        <Link
          to={address + "TodoTasks"}
          className="navigation-button badge rounded-pill border-white border border-1 fs-5"
          onClick={() => setCurrentPage(address + "TodoTasks")}
        >
          {currentPage === address + "TodoTasks" && (
            <div className="pageName selected">Todo</div>
          )}
          {!(currentPage === address + "TodoTasks") && (
            <div className="pageName not-selected">Todo</div>
          )}
        </Link>
        <div
          className="navigation-button badge rounded-pill border-white border border-1 fs-5"
          onClick={() => {
            blurPage(true);
            setTaskToEdit(createTask("", "", false, []));
            displayTaskPopUp(true);
          }}
        >
          <div className="pageName not-selected">Add Task</div>
        </div>
      </div>

      <div className="tags">
        {displayTags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
