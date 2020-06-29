import React from "react";

interface IFavorites {
    id: number;
    joke: string;
}

interface IFavoriteProps {
    item: IFavorites;
}

const Favorite: React.FC<IFavoriteProps> = ({item}) => {
    return <li>{item.joke}</li>;
};

export default Favorite;
