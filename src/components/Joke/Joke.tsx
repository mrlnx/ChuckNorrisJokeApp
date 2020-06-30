import React from "react";
import {IJokeProps} from "./types";

import sprite from "./../../assets/sprite.svg";

import "./Joke.css";

const Joke: React.FC<IJokeProps> = ({item, handleAddJoke}) => {
    return (
        <li>
            <span>{item.joke}</span>
            {item.showFavoriteButton === true ? (
                <button onClick={() => handleAddJoke(item)}>
                    <svg className="star">
                        <use href={sprite + "#icon-star"} />
                    </svg>
                </button>
            ) : (
                ""
            )}
        </li>
    );
};

export default Joke;
