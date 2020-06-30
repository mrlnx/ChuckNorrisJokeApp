import React from "react";
import Favorite from "./../Favorite/Favorite";

import {IFavoriteListProps} from "./types";

const FavoriteList: React.FC<IFavoriteListProps> = ({favorites, handleRemoveJoke}) => {
    return (
        <div className="jokes-list">
            <h2>Favorite Jokes</h2>
            <ul>
                {favorites.map((item) => (
                    <Favorite key={item.id} item={item} handleRemoveJoke={handleRemoveJoke} />
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
