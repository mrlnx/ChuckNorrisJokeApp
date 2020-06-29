import React from "react";

interface IJokes {
    id: number;
    joke: string;
}

interface IJokeProps {
    item: IJokes;
    handleFavorite: () => void;
}

const Joke: React.FC<IJokeProps> = ({item, handleFavorite}) => {
    return (
        <li>
            {item.joke}
            {item.showFavoriteButton === true ? (
                <button onClick={() => handleFavorite(item)}>Favourite</button>
            ) : (
                ""
            )}
        </li>
    );
};

export default Joke;
