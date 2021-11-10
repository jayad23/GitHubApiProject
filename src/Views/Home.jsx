import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from "../Components/Header"
import Form from "../Components/Form"
import Cards from './Cards';
import FrontPage from '../Components/FrontPage';
import Searching from '../Components/Searching';

const Home = () => {
    const [searchValue, setSearchValue] = useState("")
    const [dataApi, setDataApi] = useState([])

    const handlerValue = ({value})=>{
        setSearchValue(value)
        
    }

    const handlerRequestApi = async (e)=>{
        e.preventDefault()
        const urlDir = `https://api.github.com/users/${searchValue}`
        const response = await fetch(urlDir)
        const result = await response.json()
        setDataApi(result)
    }

    return (
        <div className="container-header">
            <Header/>
            <Form
                handlerValue = {handlerValue}
                handlerRequestApi = {handlerRequestApi}
            />
            {   searchValue === "" ?  <FrontPage/> :
                searchValue !== dataApi.login ? <Searching/> :
                dataApi && 
                    <Link to={`/users/${searchValue}`}>
                        <Cards 
                            key={dataApi?.id}
                            userName={dataApi?.login}
                            name={dataApi.name}
                            image={dataApi?.avatar_url}
                            followers={dataApi?.followers}
                            following={dataApi?.following}
                            repositories={dataApi?.public_repos}
                            url={dataApi?.html_url}
                            bio={dataApi.bio}
                        /> 
                    </Link>
               
            }
        </div>
    )
}

export default Home
