import React from 'react'
import '../Styles/FrontPage.css'

const FrontPage = () => {
    return (
        <div className="frontPage-container">
            <img src="https://raw.githubusercontent.com/iCharlesZ/FigureBed/master/img/octocat.gif" alt="" />
            <h3>Requirements of the Search</h3>
            <ul>
                <li>Type in the user name</li>
                <li>Type in lowercase</li>
                <li>Do not use space in between the characters</li>
            </ul>
        </div>
    )
}

export default FrontPage
