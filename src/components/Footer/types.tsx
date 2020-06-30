import {IJoke} from "./../../shared/types";

export interface IFooter {
    tabs: string;
    favoriteJokes: IJoke;
    handleTabSwitch: () => void;
    handleFetchJokes: () => void;
    handleFavoriteJokeTimer: () => void;
}
