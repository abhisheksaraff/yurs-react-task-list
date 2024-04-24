/* Components */
import NavBar from "./TaskList/NavBar";
import Footer from "./TaskList/Footer";
import createTask from "./TaskList/createTask";

/* Functionality */
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

/* Styles */
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AnimatedRoutes from "./TaskList/AnimatedRoutes";

function App() {
  /* SampleTasks */
  const sampleTasks = [
    createTask("Take out Trash", new Date("2024-05-25"), false, [
      "non-urgent",
      "weekly",
      "home",
    ]),
    createTask("Finish HomeWork", new Date("2024-04-19"), true, [
      "daily",
      "urgent",
      "school",
    ]),
    createTask("Final Exam", new Date("2024-12-02"), false, [
      "urgent",
      "quarterly",
      "school",
    ]),
    createTask("Submit Assignment", new Date("2023-10-27"), true, [
      "school",
      "urgent",
      "weekly",
    ]),
    createTask("Cook Food", new Date("2024-04-23"), false, [
      "non-urgent",
      "daily",
      "home",
    ]),
    createTask("Eye Exam", new Date("2024-07-09"), true, [
      "medical",
      "urgent",
      "personal",
    ]),
    createTask("Replace Filter", new Date("2025-01-01"), false, [
      "repeating",
      "important",
      "home",
      "learn",
    ]),
    createTask("Go Shopping for clothes", new Date("2024-05-02"), true, [
      "personal",
      "non-urgent",
    ]),
    createTask("Take out Trash", new Date("2024-05-25"), false, [
      "non-urgent",
      "weekly",
      "home",
    ]),
    createTask(
      "Finish HomeWork for chemistry there is a lot to do. A lot of practice needs to be done.",
      new Date("2024-04-19"),
      true,
      ["daily", "urgent", "school"]
    ),
    createTask("Final Exam", new Date("2024-12-02"), false, [
      "urgent",
      "quarterly",
      "school",
    ]),
  ];

  /* Extract Tags from List */
  const getDisplayTags = (list) => {
    const tags = [];
    list.forEach((item) => {
      item.tags.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    });
    return tags;
  };

  const [tasks, setTasks] = useState(sampleTasks);
  const [displayTags, setDisplayTags] = useState(getDisplayTags(tasks));
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  /* Mark Task Complete/ Incomplete */
  const toggleTaskStatus = (taskId) => {
    let tempTasks = Object.values(tasks).map((task) => task); //Holds a copy of tasks
    tempTasks.forEach((task) => {
      if (task.id === taskId) {
        if (task.isCompleted) task.isCompleted = false;
        else task.isCompleted = true;
      }
    });

    setTasks(tempTasks);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar
          displayTags={displayTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="content">
          <AnimatedRoutes
            tasks={tasks}
            setTasks={setTasks}
            selectedTags={selectedTags}
            toggleTaskStatus={toggleTaskStatus}
          />
        </div>
        <Footer tasks={tasks} />
      </BrowserRouter>
    </div>
  );
}

export default App;
