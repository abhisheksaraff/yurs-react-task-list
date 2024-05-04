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
