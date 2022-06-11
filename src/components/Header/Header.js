import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my rest countries</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Shop</a>
                <a href="/about">Location</a>
            </nav>
        </div>
    );
};

export default Header;