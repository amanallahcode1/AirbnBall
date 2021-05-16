import React from 'react'
import airbnbLogo from './bnball.png'
import './navbar.css'
import { useSelector } from 'react-redux';
import LoggedIn from '../LoggedIn';

function NavBar({ isLoaded }) {
    const sessionUser = useSelector(state=> state.session.user);

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
        <LoggedIn user={sessionUser.fullName}/>
        );
    } else {
        sessionLinks = (
            <>
        <div className='navbar'>
            <a href="/">
                <img 
                className='navbar__icon'
                src={airbnbLogo}
                alt='logo' />
            </a>
            <div className='navbar__right'>
                <a href='/signup'>
                    <button class='form-button'>Sign Up</button>
                </a>
                <a href='/login'>
                    <button class='form-button'>Login</button>
                </a>  
                 <a href='/about' id="aboutButton">
                    <button class='form-button'>About</button>
                </a>             
            </div>
        </div>  
            </>
        )
    }
    return (
    <ul>
        <li>
            {sessionLinks}
        </li>
    </ul>
    )
}

export default NavBar;
