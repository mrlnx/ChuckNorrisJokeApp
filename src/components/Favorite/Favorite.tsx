import React from "react";
import {IFavoriteProps} from "./types";

import sprite from "./../../assets/sprite.svg";

import "./Favorite.css";

const Favorite: React.FC<IFavoriteProps> = ({item, handleRemoveJoke}) => {
    return (
        <li>
            {item.joke}
            <button onClick={() => handleRemoveJoke(item)}>
                <svg className="star">
                    <use href={sprite + "#icon-star-outlined"} />
                </svg>
            </button>
        </li>
    );
};

export default Favorite;
