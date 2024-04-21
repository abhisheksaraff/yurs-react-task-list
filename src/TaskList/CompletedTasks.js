import { useState } from "react";

function CompletedTasks({ tasks, setTasks }) {
  const taskIsCompleted = (task) => task.isCompleted;
  const getCompletedTasks = tasks.filter(taskIsCompleted);

  const [completedTasks, setCompletedTasks] = useState(getCompletedTasks);

  completedTasks.forEach((task) => {
    //console.log(task.description);
  });
  return <div className="CompletedTasks list-view">CompletedTasks</div>;
}

export default CompletedTasks;
