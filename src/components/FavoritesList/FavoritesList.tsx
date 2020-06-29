import React from "react";
import Favorite from "./../Favorite/Favorite";

interface IFavorites {
    id: number;
    joke: string;
}

interface IFavoriteListProps {
    jokes: Array<IFavorites>;
}

const FavoriteList: React.FC<IFavoriteListProps> = ({favorites}) => {
    return (
        <>
            <h2>Favorite Jokes</h2>
            <ul>
                {favorites.map((item) => (
                    <Favorite key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default FavoriteList;
