import React, { useState } from "react";

import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import "./style.css";
import {
  SortableContext,
  arrayMove,
  arraySwap,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "../../SortableItem";
import { Item } from "./Items";
import { myPhotos } from "../../photos";
export default function SortablePreset() {
  const [items, setItems] = useState(myPhotos);
  const [activeId, setActiveId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });

      setActiveId(null);
    }
    setIsDragging(false);
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
    setIsDragging(true);
  };

  const handleDragCancle = () => {
    setActiveId(null);
    setIsDragging(false);
  };

  const style = {
    width: "100%",
    height: "100%",
    background: "#e0d2d2",
    color: "#fff",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "26px",
    fontFamily: "Arial, san-serif",
  };
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancle}
      >
        <SortableContext
          items={items}
          strategy={rectSortingStrategy}
          reorderItems={arraySwap}
        >
          <div className="grid">
            {items.map((id, index) => (
              <SortableItem
                className={id.includes(".webp") ? "item imageSize" : "item"}
                key={id}
                id={id}
                link={id}
                index={index}
              ></SortableItem>
            ))}
            <div style={style}>upload</div>
          </div>
        </SortableContext>
        {isDragging && (
          <DragOverlay adjustScale={true}>
            {activeId ? (
              <>
                <Item
                  link={activeId}
                  id={activeId}
                  index={items.indexOf(activeId)}
                />
                {console.log("hhh", activeId)}
              </>
            ) : null}
          </DragOverlay>
        )}
      </DndContext>
    </>
  );
}
