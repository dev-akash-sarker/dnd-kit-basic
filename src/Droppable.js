import { useDroppable } from "@dnd-kit/core";
import React from "react";

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
