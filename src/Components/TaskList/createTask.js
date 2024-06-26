import uniqid from "uniqid";

const createTask = (description, dueDate, isCompleted, tags) => {
  return { id: uniqid(), description, dueDate, isCompleted, tags: deleteDuplicateTags(tags), shape: ("shape" + [Math.floor(Math.random()*4) + 1]), color: ("color" + [Math.floor(Math.random()*11) + 1])};
};

function deleteDuplicateTags(tags){
  let tempTags = [];
  tags.forEach((tag) => {
    if(!tempTags.includes(tag)) tempTags.push(tag);
  })

  return tempTags;
}

export default createTask;
