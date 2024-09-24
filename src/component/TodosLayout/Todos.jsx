import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./todos.scss";
import Card from "../Cards/Card";

const initialData = {
  todo: [1, 2, 3, 4, 5, 6],
  inProgress: [],
  done: [],
};

const Todos = () => {
  const [sections, setSections] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const newSection = Array.from(sections[source.droppableId]);
      const [removed] = newSection.splice(source.index, 1);
      newSection.splice(destination.index, 0, removed);

      setSections((prev) => ({
        ...prev,
        [source.droppableId]: newSection,
      }));
    } else {
      const sourceSection = Array.from(sections[source.droppableId]);
      const destSection = Array.from(sections[destination.droppableId]);
      const [removed] = sourceSection.splice(source.index, 1);
      destSection.splice(destination.index, 0, removed);

      setSections((prev) => ({
        ...prev,
        [source.droppableId]: sourceSection,
        [destination.droppableId]: destSection,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        {Object.keys(sections).map((section) => (
          <Droppable key={section} droppableId={section}>
            {(provided) => (
              <div
                className={`section ${section}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className={`${section}-box`}>{section.replace(/([A-Z])/g, ' $1')}</h2>
                {sections[section].map((cardId, index) => (
                  <Draggable key={cardId} draggableId={String(cardId)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Todos;
