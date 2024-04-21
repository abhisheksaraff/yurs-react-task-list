/* Components */
import NavBar from "./TaskList/NavBar";
import Footer from "./TaskList/Footer";

/* Functionality */
import createTask from "./TaskList/createTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AllTasks from "./TaskList/AllTasks";
import TodoTasks from "./TaskList/TodoTasks";
import CompletedTasks from "./TaskList/CompletedTasks";

function App() {
  /* SampleTasks */
  const sampleTasks = [
    createTask("Take out Trash", new Date("2024-05-25"), false, [""]),
    createTask("Finish HomeWork", new Date("2024-04-19"), true, [""]),
    createTask("Final Exam", new Date("2024-12-02"), false, [""]),
    createTask("Submit Assignment", new Date("2023-10-27"), true, [""]),
  ];

  const [tasks, setTasks] = useState(sampleTasks);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
