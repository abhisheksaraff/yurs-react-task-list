import { useEffect, useState } from "react";
import createTask from "../createTask";

function TaskPopUp({
  blurPage,
  displayTaskPopUp,
  tasks,
  setTasks,
  addTask,
  deleteTask,
  taskToEdit,
  showNotification,
}) {
  const [hasDueDate, setHasDueDate] = useState(true);
  const [yyyymmdd, setyyyymmdd] = useState(() => {
    if (hasDueDate) return getDueDate(new Date().toDateString());
    else getDueDate(taskToEdit.dueDate);
  });
  const [taskIsCompleted, setTaskIsCompleted] = useState(
    taskToEdit.isCompleted
  );

  const [tags, setTags] = useState(tagsToString(taskToEdit));

  function tagsToString(task) {
    if (task.tags.length > 0) return task.tags.join(" ");
    else return "";
  }

  function getDueDate(data) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const tempDate = data.split(" ");
    const month = months.indexOf(tempDate[1]) + 1;
    const date = tempDate[2];
    const year = tempDate[3];

    return "" + year + "-" + (month < 10 ? "0" : "") + month + "-" + date;
  }

  const toggleTaskStatus = () => {
    const taskStatus = document.getElementById("taskStatus");

    if (taskStatus.classList.contains("isNotCompleted")) {
      taskStatus.classList.add("isCompleted");
      taskStatus.classList.remove("isNotCompleted");
      setTaskIsCompleted(true);
    } else {
      taskStatus.classList.remove("isCompleted");
      taskStatus.classList.add("isNotCompleted");
      setTaskIsCompleted(false);
    }
  };

  useEffect(() => {
    //Update Date
    if (taskToEdit.dueDate === "") {
      setHasDueDate(false);
      setyyyymmdd(getDueDate(new Date().toDateString()));
    } else {
      setHasDueDate(true);
      setyyyymmdd(getDueDate(taskToEdit.dueDate));
    }

    //Update Status
    setTaskIsCompleted(taskToEdit.isCompleted);

    //Update Tags
    setTags(tagsToString(taskToEdit));
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const descriptionData = e.target.description.value;

    const tempTags = e.target.tags.value;
    let tagsData = [];
    if (tempTags !== "") tagsData = tempTags.split(" ");

    let dueDateData = "";
    if (hasDueDate) {
      let tempDueDateData = e.target.date.value.split("-");
      dueDateData = new Date(
        parseInt(tempDueDateData[0]),
        parseInt(tempDueDateData[1]) - 1,
        parseInt(tempDueDateData[2])
      ).toDateString();
    }

    const isCompletedData = taskIsCompleted;

    let taskIsFound = false;

    tasks.forEach((task) => {
      if (task.id === taskToEdit.id) {
        if (
          task.description !== descriptionData ||
          JSON.stringify(task.tags) !== JSON.stringify(tagsData) ||
          task.dueDate !== dueDateData ||
          task.isCompleted !== isCompletedData
        ) {
          let tempTasks = []; //Holds a copy of tasks
          tasks.forEach((task) => {
            if (task.id !== taskToEdit.id) tempTasks.push(task);
            else
              tempTasks.push(
                createTask(
                  descriptionData,
                  dueDateData,
                  isCompletedData,
                  tagsData
                )
              );
          });
          setTasks([...tempTasks]);
          showNotification("Task updated successfully.");
        }
        taskIsFound = true;
      }
    });

    if (taskIsFound === false) {
      addTask(
        createTask(descriptionData, dueDateData, isCompletedData, tagsData)
      );
    }

    clearData();
  };

  const clearData = () => {
    const taskStatus = document.getElementById("taskStatus");
    taskStatus.classList.remove("isCompleted");
    taskStatus.classList.add("isNotCompleted");
    taskToEdit.isCompleted = false;
    document.getElementsByClassName("taskForm")[0].reset();
    setHasDueDate(false);
    blurPage(false);
    displayTaskPopUp(false);
  };

  return (
    <div className="taskPopUp">
      <form className="taskForm" onSubmit={handleSubmit}>
        <div className="taskTop">
          <div id="taskHeading">Task</div>
          <div
            id="taskCancel"
            onClick={() => {
              clearData();
            }}
          >
            +
          </div>
        </div>
        <textarea
          name="description"
          type="textarea"
          id="taskDescription"
          defaultValue={taskToEdit.description}
          placeholder="Finish working on.. "
          required
        />
        <input
          label="description"
          type="text"
          name="tags"
          id="taskTags"
          defaultValue={tags}
          placeholder="Enter tags separated by a space.. "
        />
        <div className="attributes">
          <div className="left">
            <div
              id="taskStatus"
              className={
                taskToEdit.isCompleted ? "isCompleted" : "isNotCompleted"
              }
              data-toggle="tooltip"
              data-placement="top"
              title="Click to change task status"
              onClick={() => {
                toggleTaskStatus();
              }}
            ></div>
            <div className="statusText">
              {taskIsCompleted ? "Task Completed" : "Task Todo"}
            </div>
          </div>
          <div className="right">
            {hasDueDate && (
              <input
                type="date"
                name="date"
                className={"right"}
                id="datePicker"
                defaultValue={yyyymmdd}
              />
            )}
            <div className="statusText">Due Date</div>
            <div
              className={"hasDueDate " + hasDueDate}
              onClick={() => {
                setHasDueDate(!hasDueDate);
              }}
            ></div>
          </div>
        </div>
        <div id="taskBottom">
          <button id="taskBottomFinish" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskPopUp;
