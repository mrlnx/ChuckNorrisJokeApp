import React from "react";
import Joke from "./../Joke/Joke";

interface IJokes {
    id: number;
    joke: string;
}

interface IFavorites {
    id: number;
    joke: string;
}

interface IJokesListProps {
    jokes: Array<IJokes>;
    favoriteJokes: Array<IFavorites>;
    handleFavorite: () => void;
}

const JokesList: React.FC<IJokesListProps> = ({jokes, favoriteJokes, handleFavorite}) => {
    return (
        <>
            <h2>Jokes</h2>
            <ul>
                {jokes.map((item) => {
                    const filteredItems = favoriteJokes.filter((filter) => filter.id === item.id);
                    item.showFavoriteButton = filteredItems.length === 0 ? true : false;

                    return <Joke key={item.joke} item={item} handleFavorite={handleFavorite} />;
                })}
            </ul>
        </>
    );
};

export default JokesList;
