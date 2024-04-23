import AllTasks from "./AllTasks";
import TodoTasks from "./TodoTasks";
import CompletedTasks from "./CompletedTasks";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({ tasks, setTasks, selectedTags }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AllTasks
              tasks={tasks}
              setTasks={setTasks}
              selectedTags={selectedTags}
            />
          }
        />
        <Route
          path="/TodoTasks"
          element={
            <TodoTasks
              tasks={tasks}
              setTasks={setTasks}
              selectedTags={selectedTags}
            />
          }
        />
        <Route
          path="/completedTasks"
          element={
            <CompletedTasks
              tasks={tasks}
              setTasks={setTasks}
              selectedTags={selectedTags}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
