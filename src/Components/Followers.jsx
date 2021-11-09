import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import FollowersCard from './FollowersCard';
import Header from './Header';
import '../Styles/FollowersCard.css'

const Followers = () => {
    const {name} = useParams()
    const [followersInfo, setFollowersInfo] = useState([])

    useEffect(()=>{
        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}/followers`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowersInfo(result)
        }
        requestApi()
    }, [name])

    return (
        <div>
            <Header/>
            <div className="container-cards">
                {
                    followersInfo?.map(data =>
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

export default Followers

