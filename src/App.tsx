import React, {useState, useEffect} from "react";

import JokesList from "./components/JokesList/JokesList";
import FavoritesList from "./components/FavoritesList/FavoritesList";

import {favoritesStore} from "./utils/constants";
import {storeItem, getStoredItem} from "./utils/store";

import {IJoke} from "./shared/types";

const App: React.RC = () => {
    const initialFavoriteJokes = JSON.parse(getStoredItem(favoritesStore)) || [];

    const [fetchJokes, setFetchJokes] = useState<{jokesFetched: boolean}>(false);
    const [jokes, setJokes] = useState<IJoke>([]);
    const [favoriteJokes, setFavoriteJokes] = useState<IJoke>(initialFavoriteJokes);
    const [fetchFavoriteJoke, setFetchFavoriteJoke] = useState<{favoriteJokeFetched: boolean}>(
        false
    );
    const [timer, setTimer] = useState<{timerId: number}>(null);

    /**
     * Handles the event of fetching the jokes list
     */

    const handleFetchJokes = () => setFetchJokes(true);

    /**
     * Handles adding event of the favorite joke
     * @param joke
     */

    const handleAddFavoriteJoke = (joke) => {
        if (favoriteJokes.length <= 9) setFavoriteJokes([...favoriteJokes, joke]);
    };

    /**
     * Handles the removing event of an Favorite joke
     * @param joke
     */

    const handleRemoveFavoriteJoke = (joke) => {
        const filteredJokes = favoriteJokes.filter((filteredJoke) => filteredJoke.id !== joke.id);
        setFavoriteJokes(filteredJokes);
    };

    /**
     * Handles the event of adding an favorite joke
     */

    const handleFavoriteJokeTimer = () => {
        if (timer !== null) {
            clearInterval(timer);
            setTimer(null);
        } else {
            const jokeInterval = setInterval(setFetchFavoriteJoke, 5000, true);
            setTimer(jokeInterval);
        }
    };

    useEffect(() => {
        if (fetchJokes) {
            fetch("http://api.icndb.com/jokes/random/10.", {})
                .then((res) => res.json())
                .then((data) => setJokes(data.value))
                .catch((err) => console.error(err));
            setFetchJokes(false);
        }
    }, [fetchJokes]);

    useEffect(() => {
        storeItem(favoritesStore, JSON.stringify(favoriteJokes));
    }, [favoriteJokes]);

    useEffect(() => {
        if (fetchFavoriteJoke) {
            console.log("fetch");
            fetch("http://api.icndb.com/jokes/random/1.", {})
                .then((res) => res.json())
                .then((data) => setFavoriteJokes([...favoriteJokes, data.value[0]]))
                .catch((err) => console.error(err));
            setFetchFavoriteJoke(false);
        }
    }, [favoriteJokes, fetchFavoriteJoke]);

    return (
        <>
            <>
                <h1>Chuck Norris Jokes App</h1>
                <button onClick={() => handleFetchJokes()}>Fetch Jokes</button>
                <label>
                    Switch timer
                    <input type="checkbox" onClick={() => handleFavoriteJokeTimer()} />
                </label>
            </>
            <JokesList
                jokes={jokes}
                favoriteJokes={favoriteJokes}
                handleAddJoke={handleAddFavoriteJoke}
            />
            <FavoritesList favorites={favoriteJokes} handleRemoveJoke={handleRemoveFavoriteJoke} />
        </>
    );
};

export default App;
