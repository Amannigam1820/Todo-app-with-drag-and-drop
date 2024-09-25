// import React from 'react'
// import "./card.scss"

// const Card = () => {
//   return (
//     <article className='card-container' draggable="true">
//         <div className='title'>
//             <h4>Title</h4>
//         </div>
//         <div className='desc'>
//             <h5>description</h5>
//         </div>
//         <div className='cratedAt'>
//             <h6>createdAt: 12:23:44</h6>
//         </div>
//         <div className='button-container'>
//             <button className='del-btn'>delete</button>
//             <button className='edit-btn'>Edit</button>
//             <button className='detail-btn'>View Detail</button>
//         </div>

//     </article>
//   )
// }

// export default Card

// // import React from 'react';
// // import "./card.scss";

// // const Card = ({ cardData, onDragStart, onDragOver, onDrop }) => {
  
// //   // Drag start handler
// //   const handleDragStart = (e) => {
// //     onDragStart(e, cardData.id); // Passing card id or relevant info
// //   };

// //   // Allow dropping by preventing default behavior
// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //   };

// //   // Handle when the card is dropped
// //   const handleDrop = (e) => {
// //     onDrop(e, cardData.id);
// //   };

// //   return (
// //     <article 
// //       className='card-container' 
// //       draggable="true" 
// //       onDragStart={handleDragStart} 
// //       onDragOver={handleDragOver} 
// //       onDrop={handleDrop}
// //     >
// //       <div className='title'>
// //         <h4>{cardData.title || 'Title'}</h4>
// //       </div>
// //       <div className='desc'>
// //         <h5>{cardData.description || 'Description'}</h5>
// //       </div>
// //       <div className='createdAt'>
// //         <h6>{cardData.createdAt || 'CreatedAt: 12:23:44'}</h6>
// //       </div>
// //       <div className='button-container'>
// //         <button className='del-btn'>Delete</button>
// //         <button className='edit-btn'>Edit</button>
// //         <button className='detail-btn'>View Detail</button>
// //       </div>
// //     </article>
// //   );
// // };

// // export default Card;


import React from 'react';
import './card.scss';

const Card = ({ cardData, onDragStart, onDragOver, onDrop }) => {

  // Drag start handler
  const handleDragStart = (e) => {
    onDragStart(e, cardData.id); // Passing card id or relevant info
  };

  // Allow dropping by preventing default behavior
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle when the card is dropped
  const handleDrop = (e) => {
    onDrop(e, cardData.id);
  };

  return (
    <article 
      className='card-container' 
      draggable="true" 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver} 
      onDrop={handleDrop}
    >
      <div className='title'>
        <h4>{cardData.title || 'Title'}</h4>
      </div>
      <div className='desc'>
        <h5>{cardData.description || 'Description'}</h5>
      </div>
      <div className='createdAt'>
        <h6>{cardData.createdAt || 'CreatedAt: 12:23:44'}</h6>
      </div>
      <div className='button-container'>
        <button className='del-btn'>Delete</button>
        <button className='edit-btn'>Edit</button>
        <button className='detail-btn'>View Detail</button>
      </div>
    </article>
  );
};

export default Card;
