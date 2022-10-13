import React from "react";

import './app.css'

import CardList from '../card-list'

import data from '../../assets/data.json'
import comments from '../../assets/comments.json'

const App = () => {    
    return (
        <div className="cardholder"> 
            <CardList data={data} comments={comments}/>
        </div>
    )
    
}

export default App
