import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router-dom';

import '../Styles/Cards.css'

const Cards = (props) => {
    const {userName, image, followers, url} = props

    const [isFlipped, setIsFlipped] = useState(false)
    const [areFollowers, setAreFollowers] = useState([])
    const [isFollowing, setIsFollowing] = useState([])
    const [repo, setRepo] = useState([])

    useEffect(()=>{
        const requestFollowers = async ()=>{
            const response = await fetch(followers)
            const result = await response.json()
            setAreFollowers(result.length)
        }
        requestFollowers()

        const requestFollowing = async ()=>{
            const response = await fetch(`https://api.github.com/users/${userName}/following`)
            const result = await response.json()
            setIsFollowing(result.length)
        }
        requestFollowing()

        const requestRepos = async ()=>{
            const response = await fetch(`https://api.github.com/users/${userName}/repos`)
            const result = await response.json()
            setRepo(result.length)
        }
        requestRepos()

    }, [])

    const handleClick = ()=>{
        setIsFlipped(!isFlipped)
    }
    
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        
            <div className="cards-container card-front">
                <img src={image} alt={`avatar of ${userName}`} />
                <p>Currently studying Software Engineering and Computer Science. (S)He is an enthusiast for challenging projects.</p>
                <a 
                    href={url}
                    target="_blank"
                >Go to GitHub here...
                </a>
                <button onClick={handleClick}><span>See More</span></button>
            </div>
            <div className="cards-container card-back">
                <div>
                    <img src={image}/>
                </div>
                <ul>
                    <Link to={`/users/${userName}/followers`}><li>Followers: {areFollowers}</li></Link>
                    <li>Following: {isFollowing}</li>
                    <li>Repositorios: {repo}</li>
                </ul>
                <button onClick={handleClick}><span>Click Back</span></button>
            </div>
       
        </ReactCardFlip>
    )
}

export default Cards
