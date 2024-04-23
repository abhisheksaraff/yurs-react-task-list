import TaskThumbnail from "./TaskThumbnail";
import { motion } from "framer-motion";

function AllTasks({ tasks, setTasks, selectedTags }) {
  return (
    //<motion.div className="AllTasks" initial={{opacity:0}} animate={{opacity:1}}  exit={{opacity:0, transition: {duration: 0.5}}}>
    <motion.div>
      <div className="task"></div>
      {tasks.map((task) => {
        return <TaskThumbnail task={task} key={task.id} />;
      })}
    </motion.div>
  );
}

export default AllTasks;
