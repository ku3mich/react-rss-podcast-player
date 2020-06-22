import React from "react";
import Player from "../src/Player";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <Player url="http://joeroganexp.joerogan.libsynpro.com/rss" />
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
