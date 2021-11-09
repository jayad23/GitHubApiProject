import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import Header from '../Components/Header';
import FollowersCard from '../Components/FollowersCard';
import '../Styles/FollowersCard.css'

export const Following = () => {
    const {name} = useParams()
    const [followingData, setFollowingData] = useState([])

    useEffect(()=>{
        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}/following`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowingData(result)
        }
        requestApi()
    }, [name])

    
    return (
        <div>
            <Header/>
            <div className="container-cards">
                {
                    followingData?.map(data =>
                        <FollowersCard
                            key={data?.id}
                            userName ={data?.login}
                            image={data?.avatar_url}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Following