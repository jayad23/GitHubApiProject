import React, { useState } from 'react';

import Header from "../Components/Header"
import Form from "../Components/Form"
import Cards from './Cards';

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
            {   searchValue === "" ?  <h3>Please, Input the user</h3> :
                searchValue !== dataApi.login ? <h4>No encontrado</h4> :
                dataApi &&
                <Cards 
                    key={dataApi?.id}
                    userName={dataApi?.login}
                    image={dataApi?.avatar_url}
                    followers={dataApi?.followers_url}
                    following={dataApi?.following_url}
                    repositories={dataApi?.repos_url}
                    url={dataApi?.html_url}
                />
                    
            }
        </div>
    )
}

export default Home
