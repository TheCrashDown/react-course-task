import React from 'react'

import Card from '../card'
import './card-list.css'

const CardList = ({ data }) => {

    return (
        <ul className='cardList'>{ 
            data.map((item) => {
                const { articleId, title, text, currentLikes } = item
                return <Card key={articleId} 
                             title={title} 
                             text={text} 
                             currentLikes={currentLikes}/>
            }) 
        }</ul>
    )
}

export default CardList
