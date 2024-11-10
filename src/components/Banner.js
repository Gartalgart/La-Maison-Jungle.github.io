import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import la librairy fontawesome
import { faBars } from '@fortawesome/free-solid-svg-icons'; //imort individuellement l'icon

function Banner({toggleCart}){
    const title = 'La maison jungle';

    return (
        <div className="banner">
            <div className='burgerContainer'>
                <FontAwesomeIcon icon={faBars} className='burgerMenu' onClick={toggleCart}/>
            </div>
            <Link to="/shoppingList">
                <div className='titleBanner'>
                    <h1 className='title-banner'>{title}</h1>
                    <img src={logo} alt='La Maison Jungle' className='logo-banner' /> 
                </div> 
            </Link>    
        </div>
               
    );
    
}

export default Banner