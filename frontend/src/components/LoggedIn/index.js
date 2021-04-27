import React from 'react'
import NavBar from '../NavBar'
import './LoggedIn.css'
import airbnbLogo from './airb.png';
function LoggedIn({user}) {
    return (
        <div className="navbar">
            <a href="/">
                <img 
                className="navbar__icon"
                src={airbnbLogo}
                alt='logo' />
            </a>
            <div className="navbar__right">
                <p className='greeting'>Hey, {user}</p>
            </div>
        </div>
    )
}

export default LoggedIn;
        // <div className="navbar">
        //     <a href="/">
        //         <img 
        //         className='navbar__icon'
        //         src={airbnbLogo}
        //         alt='logo' />
        //     </a>
        //     <div className='navbar__right'>
        //         <a href='/signup'>
        //             <button class='form-button'>Sign Up</button>
        //         </a>
        // </div>