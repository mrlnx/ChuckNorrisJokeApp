import React from "react";
import Joke from "./../Joke/Joke";

interface IJokes {
    id: number;
    joke: string;
}

interface IJokesListProps {
    jokes: Array<IJokes>;
    handleFavorite: () => void;
}

const JokesList: React.FC<IJokesListProps> = ({jokes, handleFavorite}) => {
    return (
        <>
            <h2>Jokes</h2>
            <ul>
                {jokes.map((item) => (
                    <Joke key={item.joke} item={item} handleFavorite={handleFavorite} />
                ))}
            </ul>
        </>
    );
};

export default JokesList;
