import TaskThumbnail from "./Components/TaskThumbnail";
import { useState } from "react";

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
