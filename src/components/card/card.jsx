import React, { useState } from 'react';

import './card.css'

const Card = ({ title, text, currentLikes }) => {

    const [isLiked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(currentLikes)

    const onLikeClick = () => {
        setLiked(() => {
            const countDelta = isLiked ? -1 : 1
            setLikesCount(likesCount + countDelta)
            return !isLiked
        })
    }

    let iconClass = "bi bi-heart"
    if (isLiked) {
        iconClass += "-fill"
    }


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
                <span className='number'>{ likesCount }</span>
                <h3 className='icon' onClick={ onLikeClick }>
                    <i className={iconClass}></i>
                </h3>
            </div>

        </div>
    )
}

export default Card;
