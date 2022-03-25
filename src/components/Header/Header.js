import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
                <h4>Books of Class 9 of English Version</h4>
            </div>
        </nav>
    );
};

export default Header;