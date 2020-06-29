import {IJoke} from "./../../shared/types";

export interface IFavoriteListProps {
    jokes: Array<IJoke>;
    handleRemoveJoke: () => void;
}
