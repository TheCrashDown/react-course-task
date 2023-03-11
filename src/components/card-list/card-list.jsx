import React from 'react'

import Card from '../card'
import './card-list.css'

const CardList = ({ data, comments }) => {

    return (
        <ul className='cardList'>{ 
            data.map((item) => {
                const { articleId, title, text, currentLikes } = item
                const article_comments = comments.filter(comm => comm.articleId === articleId)
                return <Card key={articleId} 
                             title={title} 
                             text={text} 
                             currentLikes={currentLikes}
                             comments={article_comments}/>
            }) 
        }</ul>
    )
}

export default CardList
