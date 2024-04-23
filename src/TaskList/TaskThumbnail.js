function TaskThumbnail({task, taskId}) {

  return (
    <div className={"taskThumbnail " + task.shape + " " + task.color}>
      <div className={"description " + task.color}>{task.description}</div>
      <div className={"isCompleted " + task.color}></div>
    </div>
  );
}

export default TaskThumbnail;
