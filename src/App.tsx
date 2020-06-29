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

    const [jokes, setJokes] = useState<IJokes>([]);

    /**
     * Get Jokes Effect
     */

    useEffect(() => {
        console.log("jokes fetched");

        fetch("http://api.icndb.com/jokes/random/10.", {})
            .then((res) => res.json())
            .then((data) => setJokes(data.value))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <>
                <h1>Chuck Norris Jokes App</h1>
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
