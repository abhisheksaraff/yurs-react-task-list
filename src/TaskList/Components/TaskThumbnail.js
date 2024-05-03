import { useEffect, useState } from "react";

function TaskThumbnail({
  tasks,
  task,
  taskId,
  selectedTags,
  toggleTaskStatus,
  reload,
  deleteTask,
  displayTaskPopUp,
  setTaskToEdit,
  blurPage,
}) {
  const [passesFilter, setPassesFilter] = useState(true);

  useEffect(() => {
    const selectedTagsArray = Object.values(selectedTags).map((tag) => tag);  //Selected tags
    const taskTagsArray = Object.values(task.tags).map((tag) => tag);         //Tags from each task

    //Sets Task display true if it has common tags with selected tags
    if (
      selectedTagsArray.length === 0 ||
      hasCommonElements(selectedTagsArray, taskTagsArray)
    )
      setPassesFilter(true);
    else setPassesFilter(false);
  }, [selectedTags, task]);

  function hasCommonElements(array1, array2) {
    let commonElements = [];
    array1.forEach((element) => {
      if (array2.includes(element)) commonElements.push(element);
    });

    if (commonElements.length === array1.length) return true;
    return false;
  }

  return (
    passesFilter && (
      <div className={"taskThumbnail " + task.shape + " " + task.color}>
        <div className={"taskDetails"}>
          <div className={"taskThumbnailTop " + task.color}>
            <div className={"description " + task.color}>
              {task.description}
            </div>
            <div className={"taskThumbnailTopRight " + task.color}>
              {task.isCompleted && (
                <div
                  className="interactiveButton isCompleted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Mark Incomplete"
                  onClick={() => {
                    toggleTaskStatus(task.id);
                    reload(task.id);
                  }}
                ></div>
              )}
              {!task.isCompleted && (
                <div
                  className="interactiveButton isNotCompleted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Mark Complete"
                  onClick={() => {
                    toggleTaskStatus(task.id);
                    reload(task.id);
                  }}
                ></div>
              )}
              <div
                className="interactiveButton edit"
                data-toggle="tooltip"
                data-placement="top"
                title="Expand"
                onClick={() => {
                  blurPage(true);
                  setTaskToEdit({ ...task });
                  displayTaskPopUp(true);
                }}
              ></div>
              <div
                className="interactiveButton delete "
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
                onClick={() => {
                  deleteTask(task.id);
                  reload(task.id);
                }}
              ></div>
            </div>
          </div>
          <div className={"taskThumbnailBottom date " + task.color}>
            {task.dueDate}
          </div>
        </div>
      </div>
    )
  );
}

export default TaskThumbnail;
