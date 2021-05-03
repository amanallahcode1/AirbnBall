import React from 'react'
import NavBar from '../NavBar'
import './LoggedIn.css'
import airbnbLogo from './airb.png';
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
                <button type="submit" onClick={logout}>Log Out</button>
            </a>
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