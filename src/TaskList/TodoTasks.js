import TaskThumbnail from "./TaskThumbnail";
import { useState } from "react";
import { motion } from "framer-motion";

function TodoTasks({ tasks, setTasks, selectedTags, toggleTaskStatus }) {
  const taskIsTodo = (task) => !task.isCompleted;
  const getTodoTasks = tasks.filter(taskIsTodo);

  const [todoTasks, setTodoTasks] = useState(getTodoTasks);

  /* Mark Task Complete/ Incomplete */
  const reload = (taskId) => {
    let tempTasks = Object.values(getTodoTasks).map((task) => task); //Holds a copy of tasks
    tempTasks.forEach((task) => {
      if (task.id === taskId) task.isCompleted = true;
    });

    setTodoTasks(tempTasks.filter(taskIsTodo));
  };

  return (
    //<motion.div className="TodoTasks" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: 0.5}}}>
    <motion.div>
      <div className="task"></div>
      {todoTasks.map((task) => {
        return (
          <TaskThumbnail
            task={task}
            key={task.id}
            selectedTags={selectedTags}
            toggleTaskStatus={toggleTaskStatus}
            reload={reload}
          />
        );
      })}
    </motion.div>
  );
}

export default TodoTasks;
