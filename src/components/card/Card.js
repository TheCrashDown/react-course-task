import React from 'react';

import './Card.css'

const Card = ({ title, text, currentLikes }) => {

    return (
        <div className='card'>
            <div className='header'>
                <span>{ title }</span>
            </div>

            <div className='separator' />

            <div className='text'>
                <span>{ text }</span>
            </div>

            <div className='likes'>
                <span className='number'>{ currentLikes }</span>
                <h3 className='icon'>
                    <i class="bi bi-heart"></i>
                </h3>
            </div>

        </div>
    )
}

export default Card;