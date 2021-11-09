import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import ReposCard from '../Components/ReposCard';

const Repo = () => {

    const [reposData, setReposData] = useState([])

    const {name} = useParams()
    useEffect(()=>{
        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}/repos`
            const response = await fetch (urlDir)
            const result = await response.json()
            setReposData(result)
        }
        requestApi()
    },[name])

    return (
        <div>
            <Header/>
            <div className="container-repoCards">
                {
                    reposData?.map(data =>
                        <ReposCard
                            key={data?.id}
                            name = {data?.name}
                            privateLight = {data?.private}
                            owner = {name}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Repo
