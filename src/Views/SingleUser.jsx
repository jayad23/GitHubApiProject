import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import Cards from './Cards'
import Header from '../Components/Header';

const SingleUser = () => {
    const {name} = useParams()
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(()=>{
        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}`
            const response = await fetch(urlDir)
            const result = await response.json()
            setSelectedUser(result)
        }
        requestApi()
    },[name])

    return (
        <div>
            <Header/>
            {
                selectedUser &&
                <Cards 
                    key={selectedUser?.id}
                    userName={selectedUser?.login}
                    name={selectedUser?.name}
                    image={selectedUser?.avatar_url}
                    followers={selectedUser?.followers}
                    following={selectedUser?.following}
                    repositories={selectedUser?.public_repos}
                    url={selectedUser?.html_url}
                    bio={selectedUser?.bio}
                />
            }
        </div>
    )
}

export default SingleUser
