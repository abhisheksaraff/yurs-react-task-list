/* Components */
import NavBar from "./TaskList/NavBar";
import Footer from "./TaskList/Footer";
import AllTasks from "./TaskList/AllTasks";
import TodoTasks from "./TaskList/TodoTasks";
import CompletedTasks from "./TaskList/CompletedTasks";
import createTask from "./TaskList/createTask";

/* Functionality */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

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

  /* Filter tasks by Tags */
  const hasTag = (task, tag) => task.tags.includes(tag);

  const getFilteredTasks = (tasks, filter) => {
    if (filter == []) return tasks;

    const filteredTasks = [];
    tasks.forEach((task) => {
      task.tags.forEach((tag) => {
        if (filter.includes(tag) && !filteredTasks.includes(task))
          filteredTasks.push(task);
      });
    });
  };

  const [tasks, setTasks] = useState(sampleTasks);
  const [displayTags, setDisplayTags] = useState(getDisplayTags(tasks));
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          displayTags = {displayTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<AllTasks tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/TodoTasks"
              element={<TodoTasks tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/completedTasks"
              element={<CompletedTasks tasks={tasks} setTasks={setTasks} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
