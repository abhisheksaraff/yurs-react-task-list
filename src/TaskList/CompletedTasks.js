import { useState } from "react";
import TaskThumbnail from "./TaskThumbnail";
import { motion } from "framer-motion";

function CompletedTasks({ tasks, setTasks, selectedTags }) {
  const taskIsCompleted = (task) => task.isCompleted;
  const getCompletedTasks = tasks.filter(taskIsCompleted);

  const [completedTasks, setCompletedTasks] = useState(getCompletedTasks);

  return (
    //<motion.div className="CompletedTasks" initial={{opacity:0}} animate={{opacity:1}}  exit={{opacity:0, transition: {duration: 0.5}}}>
    <motion.div>
      <div className="task"></div>
      {completedTasks.map((task) => {
        return <TaskThumbnail task={task} key={task.id} />;
      })}
    </motion.div>
  );
}

export default CompletedTasks;
