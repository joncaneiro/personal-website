import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div>
            <nav 
            className='flex justify-around py-14 mt-5 ml-60 mr-60'>
                <button className='primary-btn-icon'>
                <Link to ='/about'>ABOUT</Link>
                </button>
                <button className='primary-btn-icon'>
                <Link to ='/projects'>PROJECTS</Link>
                </button>
                <button className='primary-btn-icon'>
                <Link to ='/contact'>CONTACT</Link>
                </button>                         
            </nav>
        </div>
        
    );
};


export default NavBar;