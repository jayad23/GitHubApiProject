import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router-dom';

import '../Styles/Cards.css'
import Repo from './Repo';

const Cards = (props) => {
    const {userName, name, image, followers, following, repositories, bio, url} = props
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = ()=>{
        setIsFlipped(!isFlipped)
    }

    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        
            <div className="cards-container card-front">
                <img src={image ? image : "https://freefrontend.com/assets/img/css-loaders/loading.gif"} alt={`avatar of ${userName}`} />
                <p>{bio ? bio : `Hello, my name is ${name ? name : userName} and I am code lover. Welcome to my GitHub Sum-Up`}</p>
                <a 
                    href={url}
                    target="_blank"
                >GitHub Profile here...
                </a>
                <button onClick={handleClick}><span>See More</span></button>
            </div>
            <div className="cards-container card-back">
                <div>
                    <img src={image ? image : "https://freefrontend.com/assets/img/css-loaders/loading.gif"}/>
                </div>
                <ul>
                    <Link to={`/users/${userName}/followers`}><li>Followers: <br/>{followers}</li></Link>
                    <Link to={`/users/${userName}/following`}><li>Following: <br/>{following}</li></Link>
                    <Link to={`/users/${userName}/repos`}><li>Repositories: <br/>{repositories}</li></Link>
                </ul>
                <button onClick={handleClick}><span>Click Back</span></button>
            </div>
       
        </ReactCardFlip>
    )
}

export default Cards
