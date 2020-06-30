import React from "react";
import Logo from "./../../assets/logo.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={Logo} className="logo" />
            <h1>Chuck Norris jokes for you!</h1>
            <img src={Logo} className="logo" />
        </header>
    );
};

export default Header;
