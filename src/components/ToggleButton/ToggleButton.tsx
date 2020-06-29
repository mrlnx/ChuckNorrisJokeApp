import React from "react";
import {IToggleButton} from "./types";

const ToggleButton: React.FC<IToggleButton> = ({handleFavoriteJokeTimer}) => {
    return (
        <label>
            Switch timer
            <input type="checkbox" onClick={() => handleFavoriteJokeTimer()} />
        </label>
    );
};

export default ToggleButton;
