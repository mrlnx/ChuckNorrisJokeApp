import React from "react";

interface IJokes {
    id: number;
    joke: string;
}

interface IJokeProps {
    item: IJokes;
    handleAddJoke: () => void;
}

const Joke: React.FC<IJokeProps> = ({item, handleAddJoke}) => {
    return (
        <li>
            {item.joke}
            {item.showFavoriteButton === true ? (
                <button onClick={() => handleAddJoke(item)}>Favourite</button>
            ) : (
                ""
            )}
        </li>
    );
};

export default Joke;
