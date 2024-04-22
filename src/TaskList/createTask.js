import uniqid from "uniqid";

const createTask = (description, dueDate, isCompleted, tags) => {
  const shapes = ["0 3rem 0 3rem", "3rem 3rem 0 3rem", "0 3rem 3rem 3rem", "3rem 3rem 3rem 0"];
  const colors = ["#F7D44C", "#EB7A53", "#98B7DB", "#A8D672", "#F6ECC9"];

  return { id: uniqid(), description, dueDate, isCompleted, tags, shape: shapes[Math.random(4)], color: colors[Math.random(5)]};
};

export default createTask;
