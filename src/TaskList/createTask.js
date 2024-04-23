import uniqid from "uniqid";

const createTask = (description, dueDate, isCompleted, tags) => {
  return { id: uniqid(), description, dueDate, isCompleted, tags, shape: ("shape" + [Math.floor(Math.random()*4) + 1]), color: ("color" + [Math.floor(Math.random()*11) + 1])};
};

export default createTask;
