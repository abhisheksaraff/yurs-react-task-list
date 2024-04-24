import { useEffect, useState } from "react";

function TaskThumbnail({ task, taskId, selectedTags }) {
  const hasCommonElements = (array1, array2) => {
    let commonElements = [];
    array1.forEach((element) => {
      if (array2.includes(element)) commonElements.push(element);
    });

    if (commonElements.length === array1.length) return true;
    return false;
  };

  const [passesFilter, setPassesFilter] = useState(true);

  useEffect(() => {
    const selectedTagsArray = Object.values(selectedTags).map((tag) => tag);
    const taskTagsArray = Object.values(task.tags).map((tag) => tag);

    if (selectedTagsArray.length===0 || hasCommonElements(selectedTagsArray, taskTagsArray)) setPassesFilter(true);
    else setPassesFilter(false);
  }, [selectedTags, task]);

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
                <button
                  className="interactiveButton isCompleted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Mark Incomplete"
                ></button>
              )}
              {!task.isCompleted && (
                <button
                  className="interactiveButton isNotCompleted"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Mark Complete"
                ></button>
              )}
              <button
                className="interactiveButton edit"
                data-toggle="tooltip"
                data-placement="top"
                title="Edit"
              ></button>
              <button
                className="interactiveButton delete "
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
              ></button>
            </div>
          </div>
          <div className={"taskThumbnailBottom date " + task.color}>
            {task.dueDate.toDateString()}
          </div>
        </div>
      </div>
    )
  );
}

export default TaskThumbnail;
