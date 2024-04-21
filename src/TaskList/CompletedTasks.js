function CompletedTasks({tasks, setTasks}) {
  const taskIsCompleted = (task) => task.isCompleted;
  const getCompletedTasks = tasks.filter(taskIsCompleted);

  getCompletedTasks.forEach((task) => {console.log(task.description)})
  return <div className="CompletedTasks">CompletedTasks</div>;
}

export default CompletedTasks;
