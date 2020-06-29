import React, {useState, useEffect} from 'react';

interface IJokes {
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
     * When these jokes are fetched via a button they need to be displayed in a list. In this list we can mark certain jokes as favorite.
     */

    const handleFetchJokes = () => setFetchJokes(true);

    /**
     * Get Jokes Effect
     */

    useEffect(() => {
        if (fetchJokes) {
            console.log("fetch jokes");
            fetch("http://api.icndb.com/jokes/random/10.", {})
                .then((res) => res.json())
                .then((data) => setJokes(data.value))
                .catch((err) => console.error(err));
            setFetchJokes(false);
        }
    }, [fetchJokes]);

    return (
        <>
            <>
                <h1>Chuck Norris Jokes App</h1>
                <button onClick={() => handleFetchJokes()}>Fetch Jokes</button>
            </>
            <>
                <h2>Jokes</h2>
                <ul>
                    {jokes.map((item) => (
                        <li key={item.id}>{item.joke}</li>
                    ))}
                </ul>
            </>
        </>
    );
};

export default App;
