import React, {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import JokesList from "./components/JokesList/JokesList";
import FavoritesList from "./components/FavoritesList/FavoritesList";

import {favoritesStore, intervalMilliseconds} from "./utils/constants";
import {storeItem, getStoredItem} from "./utils/store";

import {IJoke} from "./shared/types";

import axios from "axios";

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
            const jokeInterval = setInterval(setFetchFavoriteJoke, intervalMilliseconds, true);
            setTimer(jokeInterval);
        }
    };

    useEffect(() => {
        const fetchAllJokes = async () => {
            try {
                const response = await axios.get("http://api.icndb.com/jokes/random/10");
                const {value} = response.data;
                setJokes(value);
                setFetchJokes(false);
            } catch (err) {
                console.log(err);
            }
        };

        if (fetchJokes) fetchAllJokes();
    }, [fetchJokes]);

    useEffect(() => {
        storeItem(favoritesStore, JSON.stringify(favoriteJokes));
    }, [favoriteJokes]);

    useEffect(() => {
        const fetchRandomJoke = async () => {
            try {
                const response = await axios.get("http://api.icndb.com/jokes/random/1");
                const {value} = response.data;
                const filteredItems = favoriteJokes.filter((filter) => filter.id === value[0].id);

                if (filteredItems.length > 0) {
                    fetchRandomJoke();
                } else {
                    setFavoriteJokes([...favoriteJokes, value[0]]);
                }
            } catch (err) {
                console.log(err);
            }
        };

        if (fetchFavoriteJoke && favoriteJokes.length <= 9) fetchRandomJoke();
        setFetchFavoriteJoke(false);
    }, [favoriteJokes, fetchFavoriteJoke]);

    return (
        <div class="container">
            <div class="content">
                <Header
                    handleFetchJokes={handleFetchJokes}
                    handleFavoriteJokeTimer={handleFavoriteJokeTimer}
                />

                <JokesList
                    jokes={jokes}
                    favoriteJokes={favoriteJokes}
                    handleAddJoke={handleAddFavoriteJoke}
                />
                <FavoritesList
                    favorites={favoriteJokes}
                    handleRemoveJoke={handleRemoveFavoriteJoke}
                />
            </div>
        </div>
    );
};

export default App;
