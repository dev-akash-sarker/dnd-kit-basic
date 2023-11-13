import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { Item } from "./components/SortSimple/Items";

export default function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.id,
      transition: {
        duration: 100,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Item
      className="items"
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    >
      {props.id}
    </Item>
  );
}
