import React, { useState } from "react";
import Draggable from "../../Draggable";
import { DndContext } from "@dnd-kit/core";
import Droppable from "../../Droppable";

export default function Simple() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me hello</Draggable>;
  const handleDragEnd = (event) => {
    console.log("hello", event);
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };
  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
      </DndContext>
    </>
  );
}
