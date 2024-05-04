import { useState } from "react";

function Tag({ tag, selectedTags, setSelectedTags }) {
  const checkIfSelected = (tag) => {
    selectedTags.map((selectedTag) => {
      if (selectedTag === tag) return true;
      return false;
    });
  };

  const [isSelected, setIsSelected] = useState(checkIfSelected(tag));

  const toggle = () => {
    const selectedTagsArray = selectedTags.map((tag) => tag)
    if (isSelected) {
      setIsSelected(false);
      delete selectedTagsArray[selectedTagsArray.indexOf(tag)];
    } else {
      setIsSelected(true);
      selectedTagsArray.push(tag);
    }
    setSelectedTags(selectedTagsArray);
  };
  return (
    <div>
      {isSelected && (
        <div className="tag selected" onClick={toggle}>
          {"#" + tag}
        </div>
      )}
      {!isSelected && (
        <div className="tag not-selected" onClick={toggle}>
          {"#" + tag}
        </div>
      )}
    </div>
  );
}

export default Tag;
