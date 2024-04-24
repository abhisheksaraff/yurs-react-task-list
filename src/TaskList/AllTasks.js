import TaskThumbnail from "./TaskThumbnail";
import { motion } from "framer-motion";

function AllTasks({ tasks, setTasks, selectedTags, toggleTaskStatus, deleteTask }) {
  const reload = () => {}
  return (
    //<motion.div className="AllTasks" initial={{opacity:0}} animate={{opacity:1}}  exit={{opacity:0, transition: {duration: 0.5}}}>
    <motion.div>
      <div className="task"></div>
      {tasks.map((task) => {
        return (
          <TaskThumbnail
            task={task}
            key={task.id}
            selectedTags={selectedTags}
            toggleTaskStatus={toggleTaskStatus}
            reload={reload}
            deleteTask={deleteTask}
          />
        );
      })}
    </motion.div>
  );
}

export default AllTasks;
