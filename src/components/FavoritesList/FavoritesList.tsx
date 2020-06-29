import React from "react";
import Favorite from "./../Favorite/Favorite";

interface IFavorites {
    id: number;
    joke: string;
}

interface IFavoriteListProps {
    jokes: Array<IFavorites>;
    handleRemoveJoke: () => void;
}

const FavoriteList: React.FC<IFavoriteListProps> = ({favorites, handleRemoveJoke}) => {
    return (
        <>
            <h2>Favorite Jokes</h2>
            <ul>
                {favorites.map((item) => (
                    <Favorite key={item.id} item={item} handleRemoveJoke={handleRemoveJoke} />
                ))}
            </ul>
        </>
    );
};

export default FavoriteList;
