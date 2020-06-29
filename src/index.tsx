import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

(async (window: Window): Promise<void> => {
    const rootElement: HTMLElement | null = document.getElementById("root");
    const render = (Component: typeof App, element: HTMLElement | null): void => {
        ReactDOM.render(<Component />, element);
    };
    render(App, rootElement);
})(window);
