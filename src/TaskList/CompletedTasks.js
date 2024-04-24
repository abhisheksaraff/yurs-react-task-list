import { useEffect, useState } from "react";
import TaskThumbnail from "./TaskThumbnail";
import { motion } from "framer-motion";

function CompletedTasks({ tasks, setTasks, selectedTags, toggleTaskStatus }) {
  const taskIsCompleted = (task) => task.isCompleted;
  const getCompletedTasks = tasks.filter(taskIsCompleted);

  const [completedTasks, setCompletedTasks] = useState(getCompletedTasks);

  /* Mark Task Complete/ Incomplete */
  const reload = (taskId) => {
    let tempTasks = Object.values(completedTasks).map((task) => task); //Holds a copy of tasks
    tempTasks.forEach((task) => {
      if (task.id === taskId) task.isCompleted = false;
    });

    setCompletedTasks(tempTasks.filter(taskIsCompleted));
  };

  return (
    //<motion.div className="CompletedTasks" initial={{opacity:0}} animate={{opacity:1}}  exit={{opacity:0, transition: {duration: 0.5}}}>
    <motion.div>
      <div className="task"></div>
      {completedTasks.map((task) => {
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

export default CompletedTasks;
