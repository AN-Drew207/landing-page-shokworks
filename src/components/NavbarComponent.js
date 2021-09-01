import React, {useState, useEffect} from 'react' 
import logo from '../img/Group 2486@2x.png'

const NavbarComponent = () =>{

    return( 
        <>
        <nav id="nav">
            <div className="navbar-img-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="navbar-content">
                <div className="navbar-nav-container">
                    <ul className="navbar-nav">
                        <li className="navbar-nav-item active">
                            Home
                        </li>
                        <li className="navbar-nav-item">
                            About
                        </li>
                        <li className="navbar-nav-item">
                            Portfolio
                        </li>
                        <li className="navbar-nav-item">
                            Product
                        </li>
                        <li className="navbar-nav-item">
                            Career                       
                        </li>
                        <li className="navbar-nav-item">
                            Blog
                        </li>
                    </ul>
                </div>
                <div className="navbar-search">
                    <input className="search" type="text" placeholder="Search here"/>
                </div>
                <div>
                    <button className="contact-us-btn">Contact Us</button>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavbarComponent