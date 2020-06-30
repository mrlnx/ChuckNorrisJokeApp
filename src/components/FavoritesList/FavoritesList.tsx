import React from "react";
import Favorite from "./../Favorite/Favorite";

import {IFavoriteListProps} from "./types";

import "./FavoritesList.css";

const FavoriteList: React.FC<IFavoriteListProps> = ({favorites, handleRemoveJoke}) => {
    return (
        <div className="jokes-list">
            <h2>Favorite jokes</h2>
            <ul>
                {favorites.length > 0 ? (
                    favorites.map((item) => (
                        <Favorite key={item.id} item={item} handleRemoveJoke={handleRemoveJoke} />
                    ))
                ) : (
                    <li>Add some jokes to favorites please!</li>
                )}
            </ul>
        </div>
    );
};

export default FavoriteList;
