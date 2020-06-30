import React from "react";

import {IJokeProps} from "./types";

const Joke: React.FC<IJokeProps> = ({item, handleAddJoke}) => {
    return (
        <li>
            <span>{item.joke}</span>
            {item.showFavoriteButton === true ? (
                <button onClick={() => handleAddJoke(item)}>Favourite</button>
            ) : (
                ""
            )}
        </li>
    );
};

export default Joke;
