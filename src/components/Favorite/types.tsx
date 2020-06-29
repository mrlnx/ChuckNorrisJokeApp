import {IJoke} from "./../../shared/types";

export interface IFavoriteProps {
    item: IJoke;
    handleRemoveJoke: () => void;
}
