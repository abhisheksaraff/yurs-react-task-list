import TaskThumbnail from "./SubComponents/TaskThumbnail";
import { useEffect, useState } from "react";

function TodoTasks({
  tasks,
  setTasks,
  selectedTags,
  toggleTaskStatus,
  deleteTask,
  displayTaskPopUp,
  setTaskToEdit,
  blurPage,
}) {
  const taskIsTodo = (task) => !task.isCompleted;
  const getTodoTasks = tasks.filter(taskIsTodo);

  const [todoTasks, setTodoTasks] = useState(getTodoTasks);

  useEffect(() => setTodoTasks(getTodoTasks), [tasks]);

  //Makes sure page header are highlighted on reload
  useEffect(() => {
    const todoTasksButton = document.getElementsByClassName("pageName")[2];
    todoTasksButton.classList.add("selected");
    todoTasksButton.classList.remove("not-selected");
    return () => {
      todoTasksButton.classList.add("not-selected");
      todoTasksButton.classList.remove("selected");
    };
  });

  /* Mark Task Complete/ Incomplete */
  const reload = (taskId) => {
    let tempTasks = Object.values(getTodoTasks).map((task) => task); //Holds a copy of tasks
    tempTasks.forEach((task) => {
      if (task.id === taskId) task.isCompleted = true;
    });

    setTodoTasks(tempTasks.filter(taskIsTodo));
  };

  return (
    <div className="todoTasks">
      <div className="task"></div>
      {todoTasks.map((task) => {
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

export default TodoTasks;
