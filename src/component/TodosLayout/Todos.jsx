import React, { useState } from 'react';
import Card from '../Cards/Card'; // Import the Card component
import './todos.scss';

const Todos = () => {
  // Separate states for each section
  const [todos, setTodos] = useState([
    { id: 1, title: 'Card 1', description: 'This is card 1', createdAt: '12:23:44' },
    { id: 2, title: 'Card 2', description: 'This is card 2', createdAt: '13:10:10' },
  ]);

  const [inProgress, setInProgress] = useState([
    // { id: 3, title: 'Card 3', description: 'This is card 3', createdAt: '14:11:22' },
  ]);

  const [done, setDone] = useState([]);

  const [draggedCard, setDraggedCard] = useState(null); // Track dragged card info

  // Start dragging a card and save its info
  const handleDragStart = (card, fromSection) => {
    setDraggedCard({ card, fromSection });
  };

  // Handle card dropping into different sections
  const handleDrop = (toSection, setToSection) => {
    if (!draggedCard) return;

    const { card, fromSection } = draggedCard;

    // Remove the card from the original section
    fromSection((prevSection) => prevSection.filter((c) => c.id !== card.id));

    // Add the card to the target section
    setToSection((prevSection) => [...prevSection, card]);

    // Clear dragged card after drop
    setDraggedCard(null);
  };

  return (
    <div className="container">
      {/* Todos Section */}
      <section
        className="section todos"
        onDragOver={(e) => e.preventDefault()} // Allow dropping
        onDrop={() => handleDrop(todos, setTodos)}
      >
        <h2>Todos</h2>
        {todos.map(card => (
          <Card
            key={card.id}
            cardData={card}
            onDragStart={() => handleDragStart(card, setTodos)}
          />
        ))}
      </section>

      {/* In Progress Section */}
      <section
        className="section in-progress"
        onDragOver={(e) => e.preventDefault()} // Allow dropping
        onDrop={() => handleDrop(inProgress, setInProgress)}
      >
        <h2>In Progress</h2>
        {inProgress.map(card => (
          <Card
            key={card.id}
            cardData={card}
            onDragStart={() => handleDragStart(card, setInProgress)}
          />
        ))}
      </section>

      {/* Done Section */}
      <section
        className="section done"
        onDragOver={(e) => e.preventDefault()} // Allow dropping
        onDrop={() => handleDrop(done, setDone)}
      >
        <h2>Done</h2>
        {done.map(card => (
          <Card
            key={card.id}
            cardData={card}
            onDragStart={() => handleDragStart(card, setDone)}
          />
        ))}
      </section>
    </div>
  );
};

export default Todos;
