import React from "react";
import Navbar from 'react-bootstrap/Navbar';

import "./sass/style.scss"

const Header = () => {
    return (
        <div className="component">
            <Navbar bg="light">
                <Navbar.Brand>Vortan Spellcheck Demo</Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Header;
