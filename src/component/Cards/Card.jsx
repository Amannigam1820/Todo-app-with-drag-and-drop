import React from 'react'
import "./card.scss"

const Card = () => {
  return (
    <div className='card-container'>
        <div className='title'>
            <h4>Title</h4>
        </div>
        <div className='desc'>
            <h5>description</h5>
        </div>
        <div className='cratedAt'>
            <h6>createdAt: 12:23:44</h6>
        </div>
        <div className='button-container'>
            <button className='del-btn'>delete</button>
            <button className='edit-btn'>Edit</button>
            <button className='detail-btn'>View Detail</button>
        </div>

    </div>
  )
}

export default Card