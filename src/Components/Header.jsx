import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react'
import '../Styles/Header.css'
const Header = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const handlerMenu = ()=>{
        setShow(!show)
    }
    return (
        <>
            <div className="header-container">
                <img src="https://camo.githubusercontent.com/08e74a3974dbc3abb5d1969f0057849dccf8a10506878f75866c552f3c22dac7/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32304e4c4d426d30426b554f774e6c6a77762f67697068792e676966" alt="" />
                <h4>GitHub API Users</h4>
                <div className="bugerMenu">
                    <button onClick={handlerMenu}><i className="fa fa-bars"></i></button>
                </div>
            </div>
            <div className={show ? "menuNav" : "notVisible"}>
                <ul>
                    <li onClick={()=> navigate('/')}>
                        <i className="fa fa-home"><span>Home</span></i>
                    </li>
                    <li onClick={()=> navigate(- 1)}>
                        <i href="#" className="previous round">&#8249;</i><span>Go Back</span>
                    </li>
                    <li onClick={()=> navigate(+ 1)}>
                        <span className="onlySpan">Next</span><i href="#" className="next round">&#8250;</i>
                    </li>
                </ul>
             </div>
        </>
    )
}

export default Header
