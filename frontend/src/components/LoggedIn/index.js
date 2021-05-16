import React from 'react'
import {Redirect} from 'react-router';
import './LoggedIn.css'
import airbnbLogo from './bnball.png';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function LoggedIn({user}) {
const dispatch = useDispatch();
const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
    
}

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
            <a href="/">
                <button type="submit" onClick={logout} id="logged-out">Log Out</button>
            </a>
            {/* <a href='/about' id="aboutButton">
                <button class='form-button'>About</button>
            </a>        */}
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