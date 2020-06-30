import React from "react";
import {IHeader} from "./types";

import ToggleButton from "./../ToggleButton/ToggleButton";

import Logo from "./../../assets/logo.png";

const Header: React.FC<IHeader> = ({handleFetchJokes, handleFavoriteJokeTimer}) => {
    return (
        <header className="header">
            <img src={Logo} className="logo" />
            <h1>Chuck Norris Jokes App</h1>
            <button onClick={() => handleFetchJokes()}>Fetch Jokes</button>

            <ToggleButton handleFavoriteJokeTimer={handleFavoriteJokeTimer} />
        </header>
    );
};

export default Header;
