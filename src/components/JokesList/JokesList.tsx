import React from "react";
import Joke from "./../Joke/Joke";

import {IJokesListProps} from "./types";

const JokesList: React.FC<IJokesListProps> = ({jokes, favoriteJokes, handleAddJoke}) => {
    return (
        <div className="jokes-list">
            <h2>Jokes</h2>
            <ul>
                {jokes.map((item) => {
                    const filteredItems = favoriteJokes.filter((filter) => filter.id === item.id);
                    item.showFavoriteButton = filteredItems.length === 0 ? true : false;

                    return <Joke key={item.joke} item={item} handleAddJoke={handleAddJoke} />;
                })}
            </ul>
        </div>
    );
};

export default JokesList;
