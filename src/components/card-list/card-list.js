import React, { useState } from 'react'

import Card from '../card'
import './card-list.css'

const CardList = ({ data }) => {

    const mapping = (arr) => {
        return arr.map((item) => {
            const { title, text, currentLikes } = item
            return <Card title={title} text={text} currentLikes={currentLikes} />
        })
    }

    const mapped_data = mapping(data)

    return (
        <ul className='card-list'>{ mapped_data }</ul>
    )
}

export default CardList