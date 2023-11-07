import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../../Draggable";
import Droppable from "../../Droppable";

export default function SimpleVersionTwo() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable>Drag Me</Draggable>;
  const handleDragEnd = (event) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}
      </DndContext>
    </>
  );
}
