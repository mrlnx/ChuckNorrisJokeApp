import React from "react";
import {IHeader} from "./types";

import ToggleButton from "./../ToggleButton/ToggleButton";

const Header: React.FC<IHeader> = ({handleFetchJokes, handleFavoriteJokeTimer}) => {
    return (
        <>
            <h1>Chuck Norris Jokes App</h1>
            <button onClick={() => handleFetchJokes()}>Fetch Jokes</button>

            <ToggleButton handleFavoriteJokeTimer={handleFavoriteJokeTimer} />
        </>
    );
};

export default Header;
