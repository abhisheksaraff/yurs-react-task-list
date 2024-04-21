function TodoTasks({ tasks, setTasks }) {
  const taskIsTodo = (task) => !task.isCompleted;
  const getTodoTasks = tasks.filter(taskIsTodo);

  getTodoTasks.forEach((task) => {
    console.log(task.description);
  });

  return <div className="TodoTasks">Todo Tasks</div>;
}

export default TodoTasks;
