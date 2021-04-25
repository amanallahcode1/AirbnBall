import React from 'react'
import airbnbLogo from './airb.png'
import './navbar.css'
function NavBar() {
    return (
        <div className='navbar'>
            <img 
            className='navbar__icon'
            src={airbnbLogo}
            alt='logo' />
            <div className='navbar__right'>
                <a href='#'>
                    <button class='form-button'>Sign Up</button>
                </a>
                <a href='#'>
                    <button class='form-button'>Login</button>
                </a>            
            </div>
        </div>  
    )
}

export default NavBar;
