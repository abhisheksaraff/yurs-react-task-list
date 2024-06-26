/* Components */
import NavBar from "./SubComponents/NavBar";
import Footer from "./SubComponents/Footer";
import SampleTasks from "./SubComponents/SampleTasks";
import TaskPopUp from "./SubComponents/TaskPopUp";

/* Functionality */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AllTasks from "./AllTasks";
import TodoTasks from "./TodoTasks";
import CompletedTasks from "./CompletedTasks";

/* Styles */
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import createTask from "./createTask";

function TaskList() {
  const address = "yurs-react-task-list/";

  const [tasks, setTasks] = useState(SampleTasks());
  const [displayTags, setDisplayTags] = useState(getDisplayTags(tasks));
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(window.location.pathname + window.location.search);
  const [taskToEdit, setTaskToEdit] = useState(createTask("", "", false, []));

  useEffect(() => {
    setDisplayTags(getDisplayTags(tasks));
  }, [tasks]);

  /* Extract Tags from List */
  function getDisplayTags(list) {
    const tags = [];
    list.forEach((item) => {
      item.tags.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    });
    return tags;
  }

  /* Add Task */
  const addTask = (task) => {
    let tempTasks = Object.values(tasks).map((task) => task);
    tempTasks.push(task);
    setTasks(tempTasks);
    showNotification("New task added.");
  };

  /* Mark Task Complete/ Incomplete */
  const toggleTaskStatus = (taskId) => {
    let tempTasks = Object.values(tasks).map((task) => task); //Holds a copy of tasks
    tempTasks.forEach((task) => {
      if (task.id === taskId) {
        if (task.isCompleted) task.isCompleted = false;
        else task.isCompleted = true;

        showNotification(
          "Task status set to " + (task.isCompleted ? "Completed." : "Todo.")
        );
      }
    });

    setTasks(tempTasks);
  };

  /* Delete Task */
  const deleteTask = (taskId) => {
    let tempTasks = []; //Holds a copy of tasks
    tasks.forEach((task) => {
      if (task.id !== taskId) tempTasks.push(task);
    });

    setTasks([...tempTasks]);
    showNotification("Task Deleted.");
  };

  /* Show Notification on User Action */
  const showNotification = (message) => {
    let snackBar = document.getElementById("snackbar");
    snackBar.innerHTML = message;
    snackBar.className = "show";
    setTimeout(function () {
      snackBar.className = snackBar.className.replace("show", "");
    }, 1000);
  };

  /* Blur Page and remove user interaction with background */
  const blurPage = (choice) => {
    const page = document.getElementsByClassName("page")[0];
    if (choice) page.classList.add("blur");
    else page.classList.remove("blur");
  };

  /* Bring TaskPopUp to front */
  const displayTaskPopUp = (choice) => {
    const taskPopUp = document.getElementsByClassName("taskPopUp")[0];
    if (choice) taskPopUp.style.display = "block";
    else taskPopUp.style.display = "none";
  };

  return (
    <div className="app">
      <BrowserRouter>
        <div className="page">
          <NavBar
            address={address}
            displayTags={displayTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            blurPage={blurPage}
            displayTaskPopUp={displayTaskPopUp}
            setTaskToEdit={setTaskToEdit}
          />
          <div className="content">
            <Routes>
              <Route
                path={address}
                element={
                  <AllTasks
                    tasks={tasks}
                    setTasks={setTasks}
                    selectedTags={selectedTags}
                    toggleTaskStatus={toggleTaskStatus}
                    deleteTask={deleteTask}
                    displayTaskPopUp={displayTaskPopUp}
                    setTaskToEdit={setTaskToEdit}
                    blurPage={blurPage}
                  />
                }
              />
              <Route
                path={address + "todoTasks"}
                element={
                  <TodoTasks
                    tasks={tasks}
                    setTasks={setTasks}
                    selectedTags={selectedTags}
                    toggleTaskStatus={toggleTaskStatus}
                    deleteTask={deleteTask}
                    displayTaskPopUp={displayTaskPopUp}
                    setTaskToEdit={setTaskToEdit}
                    blurPage={blurPage}
                  />
                }
              />
              <Route
                path={address + "completedTasks"}
                element={
                  <CompletedTasks
                    tasks={tasks}
                    setTasks={setTasks}
                    selectedTags={selectedTags}
                    toggleTaskStatus={toggleTaskStatus}
                    deleteTask={deleteTask}
                    displayTaskPopUp={displayTaskPopUp}
                    setTaskToEdit={setTaskToEdit}
                    blurPage={blurPage}
                  />
                }
              />
            </Routes>
            <div id="snackbar"></div>
          </div>
          <Footer tasks={tasks} />
        </div>
        <TaskPopUp
          displayTaskPopUp={displayTaskPopUp}
          blurPage={blurPage}
          tasks={tasks}
          setTasks={setTasks}
          addTask={addTask}
          deleteTask={deleteTask}
          taskToEdit={taskToEdit}
          showNotification={showNotification}
        />
      </BrowserRouter>
    </div>
  );
}

export default TaskList;
