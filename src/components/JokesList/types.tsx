import {IJoke} from "./../../shared/types";

export interface IJokesListProps {
    jokes: Array<IJoke>;
    favoriteJokes: Array<IJoke>;
    handleAddJoke: () => void;
}
