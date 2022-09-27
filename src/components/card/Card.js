import React from 'react';

import './Card.css'

const Card = ({ title, text, currentLikes }) => {

    return (
        <div className='card'>
            <div className='header'>
                <h1>{ title }</h1>
            </div>

            <div className='text'>
                <span>{ text }</span>
            </div>

            <div className='likes'>
                <h1>{ currentLikes }</h1>
            </div>

        </div>
    )
}

export default Card;