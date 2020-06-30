import React from "react";
import {IFooter} from "./types.ts";

const Footer: React.FC<IFooter> = ({
    tabs,
    favoriteJokes,
    handleTabSwitch,
    handleFetchJokes,
    handleFavoriteJokeTimer
}) => {
    return (
        <footer className="footer">
            <ul className="tabs">
                <li className="tab">
                    <a
                        href="#"
                        className={tabs === "jokes" ? "active" : ""}
                        onClick={() => handleTabSwitch("jokes")}
                    >
                        Jokes
                    </a>
                </li>
                <li className="tab">
                    <a
                        href="#"
                        className={tabs === "favorites" ? "active" : ""}
                        onClick={() => handleTabSwitch("favorites")}
                    >
                        Favorites {favoriteJokes.length > 0 ? `(${favoriteJokes.length})` : ""}
                    </a>
                </li>
            </ul>

            <ul className="buttons">
                <li className="button">
                    <a href="#" onClick={() => handleFetchJokes()}>
                        Fetch Jokes
                    </a>
                </li>
                <li className="button">
                    <label>
                        <input onClick={() => handleFavoriteJokeTimer()} type="checkbox" />
                        <span>Timer</span>
                    </label>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
