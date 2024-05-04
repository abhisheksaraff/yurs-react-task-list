import { useEffect } from "react";
import TaskThumbnail from "./SubComponents/TaskThumbnail";

function AllTasks({
  tasks,
  setTasks,
  selectedTags,
  toggleTaskStatus,
  deleteTask,
  displayTaskPopUp,
  setTaskToEdit,
  blurPage,
}) {
  //Makes sure page header are highlighted on reload
  useEffect(() => {
    const allTasksButton = document.getElementsByClassName("pageName")[0];
    allTasksButton.classList.add("selected");
    allTasksButton.classList.remove("not-selected");
    return () => {
      allTasksButton.classList.add("not-selected");
      allTasksButton.classList.remove("selected");
    };
  });

  const reload = () => {};
  return (
    <div className="allTask">
      <div className="task"></div>
      {tasks.map((task) => {
        return (
          <TaskThumbnail
            tasks={tasks}
            task={task}
            key={task.id}
            selectedTags={selectedTags}
            toggleTaskStatus={toggleTaskStatus}
            reload={reload}
            deleteTask={deleteTask}
            displayTaskPopUp={displayTaskPopUp}
            setTaskToEdit={setTaskToEdit}
            blurPage={blurPage}
          />
        );
      })}
    </div>
  );
}

export default AllTasks;
