import React, { useState } from 'react';

import './card.css'

import Comment from '../comment'

const Card = ({ title, text, currentLikes, comments }) => {

    const [isLiked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(currentLikes)
    const [commentsVisible, setCommentsVisible] = useState(false)

    const onLikeClick = () => {
        setLiked(() => {
            const countDelta = isLiked ? -1 : 1
            setLikesCount(likesCount + countDelta)
            return !isLiked
        })
    }

    const onCommentButtonClick = () => {
        setCommentsVisible(!commentsVisible)
    }

    let likeIconClass = "bi bi-heart"
    if (isLiked) {
        likeIconClass += "-fill"
    }

    let commentsVisibleIconClass = "bi bi-caret"
    let commentsClassname = "comments"
    if(commentsVisible){
        commentsVisibleIconClass += "-up"
    } else {
        commentsVisibleIconClass += "-down"
        commentsClassname += " invisible"
    }


    return (
        <div className='card'>
            
            <div className='mainBody'>
                <div className='header'>
                    <span>{ title }</span>
                </div>

                <div className='separator' />
                <div className='text'>
                    <span>{ text }</span>
                </div>

                <div className='buttonsPanel'>
                    <h2 className='commentsIcon' onClick={ onCommentButtonClick }>
                        <i className={ commentsVisibleIconClass } />
                    </h2>

                    <div className='likes'>
                        <span className='number'>{ likesCount }</span>
                        <h3 className='likesIcon' onClick={ onLikeClick }>
                            <i className={likeIconClass}></i>
                        </h3>
                    </div>
                </div>

            </div>

            <ul className={commentsClassname}>{ 
                comments.map((item) => {
                    const { id, author, text } = item
                    return <Comment key={id} 
                                    author={author} 
                                    text={text}/>
                }) 
            }</ul>

        </div>
    )
}

export default Card;
