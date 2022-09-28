import React, { useState } from 'react';

import './Card.css'

const Card = ({ title, text, currentLikes }) => {

    const [is_liked, setLiked] = useState(false)
    const [likes_count, setLikesCount] = useState(currentLikes)

    const onLikeClick = () => {
        setLiked(!is_liked)
        if (is_liked) {
            setLikesCount(likes_count - 1)
        } else {
            setLikesCount(likes_count + 1)
        }
    }

    let icon_class = "bi bi-heart"
    if (is_liked) {
        icon_class += "-fill"
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
                <span className='number'>{ likes_count }</span>
                <h3 className='icon' onClick={ onLikeClick }>
                    <i className={icon_class}></i>
                </h3>
            </div>

        </div>
    )
}

export default Card;
