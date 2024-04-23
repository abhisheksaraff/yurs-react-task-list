import TaskThumbnail from "./TaskThumbnail";
import { useState } from "react";
import { motion } from "framer-motion";

function TodoTasks({ tasks, setTasks, selectedTags }) {
  const taskIsTodo = (task) => !task.isCompleted;
  const getTodoTasks = tasks.filter(taskIsTodo);

  const [todoTasks, setCompletedTasks] = useState(getTodoTasks);

  return (
    //<motion.div className="TodoTasks" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: 0.5}}}>
    <motion.div>
      <div className="task"></div>
      {todoTasks.map((task) => {
        return <TaskThumbnail task={task} key={task.id} />;
      })}
    </motion.div>
  );
}

export default TodoTasks;
