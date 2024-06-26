import { useEffect, useState } from "react";
import TaskThumbnail from "./SubComponents/TaskThumbnail";

function CompletedTasks({
  tasks,
  setTasks,
  selectedTags,
  toggleTaskStatus,
  deleteTask,
  displayTaskPopUp,
  setTaskToEdit,
  blurPage,
}) {
  const taskIsCompleted = (task) => task.isCompleted;

  const getCompletedTasks = tasks.filter(taskIsCompleted);
  const [completedTasks, setCompletedTasks] = useState(getCompletedTasks);

  //Makes sure page header are highlighted on reload
  useEffect(() => {
    const completedTasksButton = document.getElementsByClassName("pageName")[1];
    completedTasksButton.classList.add("selected");
    completedTasksButton.classList.remove("not-selected");
    return () => {
      completedTasksButton.classList.add("not-selected");
      completedTasksButton.classList.remove("selected");
    };
  });

  useEffect(() => setCompletedTasks(getCompletedTasks), [tasks]);

  /* Mark Task Complete/ Incomplete */
  const reload = (taskId) => {
    let tempTasks = Object.values(completedTasks).map((task) => task); //Holds a copy of tasks
    tempTasks.forEach((task) => {
      if (task.id === taskId) task.isCompleted = false;
    });

    setCompletedTasks(tempTasks.filter(taskIsCompleted));
  };

  return (
    <div className="completedTasks">
      <div className="task"></div>
      {completedTasks.map((task) => {
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

export default CompletedTasks;
