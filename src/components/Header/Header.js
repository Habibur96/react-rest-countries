import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Hi, React Mama!!</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/location">Location</a>
            </nav>
        </div>
    );
};

export default Header;