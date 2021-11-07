import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import Cards from './Cards'
import Header from '../Components/Header';

const SingleUser = () => {
    const {userName} = useParams()
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(()=>{
        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${userName}`
            const response = await fetch(urlDir)
            const result = await response.json()
            setSelectedUser(result)
        }
        requestApi()
    },[])

    return (
        <div>
            <Header/>
            {
                selectedUser &&
                <Cards 
                    key={selectedUser?.id}
                    userName={selectedUser?.login}
                    image={selectedUser?.avatar_url}
                    followers={selectedUser?.followers_url}
                    following={selectedUser?.following_url}
                    repositories={selectedUser?.repos_url}
                    url={selectedUser?.html_url}
            />
            }
        </div>
    )
}

export default SingleUser
