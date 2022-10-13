import React from 'react';

import './comment.css'

const Comment = ({ author, text }) => {

    return (
        <div className='comment'>
            <p className='author'>{author}</p>
            <p className='text'>{text}</p>
        </div>
    )
}

export default Comment;
