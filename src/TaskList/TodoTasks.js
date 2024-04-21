import { useState } from "react";

function TodoTasks({ tasks, setTasks }) {
  const taskIsTodo = (task) => !task.isCompleted;
  const getTodoTasks = tasks.filter(taskIsTodo);

  const [todoTasks, setCompletedTasks] = useState(getTodoTasks);

  todoTasks.forEach((task) => {
    //console.log(task.description);
  });

  return <div className="TodoTasks list-view">Todo Tasks</div>;
}

export default TodoTasks;
