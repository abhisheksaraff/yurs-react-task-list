/*Components*/
import NavBar from "./TaskList/NavBar";
import TaskList from "./TaskList/TaskList";
import TodoTasks from "./TaskList/TodoTasks";
import CompletedTasks from "./TaskList/CompletedTasks";
import TaskPopUp from "./TaskList/TaskPopUp";
import Footer from "./TaskList/Footer";

/*Functionality*/
import createTask from "./TaskList/createTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element="TaskList" />
            <Route path="/TodoTasks" element="TodoTasks"/>
            <Route path="/completedTasks" element="CompletedTasks"/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
