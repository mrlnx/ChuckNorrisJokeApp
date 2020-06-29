import React from "react";

interface IFavorites {
    id: number;
    joke: string;
}

interface IFavoriteProps {
    item: IFavorites;
    handleRemoveJoke: () => void;
}

const Favorite: React.FC<IFavoriteProps> = ({item, handleRemoveJoke}) => {
    return (
        <li>
            {item.joke}
            <button onClick={() => handleRemoveJoke(item)}>Delete</button>
        </li>
    );
};

export default Favorite;
