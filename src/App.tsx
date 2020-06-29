import React, {useState, useEffect} from 'react';


import JokesList from './components/JokesList/JokesList';
import FavoritesList from './components/FavoritesList/FavoritesList';

interface IJokes {
    id: number;
    joke: string;
}

interface IFavorites {
    id: number;
    joke: string;
}

const App: React.RC = () => {
    /**
     * Get Jokes
     * We want an Application where we can fetch 10 Random Chuck Norris jokes. These jokes can be fetched from the following API http://api.icndb.com/jokes/random/10.
     */

    const [fetchJokes, setFetchJokes] = useState<{jokesFetched: boolean}>(false);
    const [jokes, setJokes] = useState<IJokes>([]);

    /**
     * Fetch Jokes Button
     * When these jokes are fetched via a button they need to be displayed in a list.
     */

    const handleFetchJokes = () => setFetchJokes(true);

    /**
     * Initial stored jokes
     * On refresh the favorites lists should be stored so next time when i visit the app my favorites should be
present.
     */

    const initialFavoriteJokes =
        JSON.parse(window.localStorage.getItem("chuck-norris-app:favorite-jokes")) || [];

    /**
     * Add Favorite Joke
     * In this list we can mark certain jokes as favorite.
     */

    const [favoriteJokes, setFavoriteJokes] = useState<IFavorites>(initialFavoriteJokes);

    const handleAddFavoriteJoke = (joke) => {
        if (favoriteJokes.length <= 9) setFavoriteJokes([...favoriteJokes, joke]);
    };

    /**
     * Remove Favorite Joke
     * There should be an option to remove jokes from the favourite list as well.
     */

    const handleRemoveFavoriteJoke = (joke) => {
        const filteredJokes = favoriteJokes.filter((filteredJoke) => filteredJoke.id !== joke.id);
        setFavoriteJokes(filteredJokes);
    };

    /**
     * Get Jokes Effect
     */

    useEffect(() => {
        if (fetchJokes) {
            fetch("http://api.icndb.com/jokes/random/10.", {})
                .then((res) => res.json())
                .then((data) => setJokes(data.value))
                .catch((err) => console.error(err));
            setFetchJokes(false);
        }
    }, [fetchJokes]);

    /**
     * Get Favorite Joke Effect
     */

    useEffect(() => {
        // storing is a side effect => storage.setItem(keyName, keyValue);
        window.localStorage.setItem("chuck-norris-app:favorite-jokes", JSON.stringify(favoriteJokes));
    }, [favoriteJokes]);

    return (
        <>
            <>
                <h1>Chuck Norris Jokes App</h1>
                <button onClick={() => handleFetchJokes()}>Fetch Jokes</button>
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
