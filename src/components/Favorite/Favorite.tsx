import React from "react";

import {IFavoriteProps} from "./types";

const Favorite: React.FC<IFavoriteProps> = ({item, handleRemoveJoke}) => {
    return (
        <li>
            {item.joke}
            <button onClick={() => handleRemoveJoke(item)}>Delete</button>
        </li>
    );
};

export default Favorite;
