import React from "react";

import './app.css'

import CardList from '../card-list'

import data from '../../assets/data.json'

const App = () => {    
    return (
        <div className="cardholder"> 
            <CardList data={data}/>
        </div>
    )
    
}

export default App
