import React from "react";
import  ReactDOM  from "react-dom";
import Hello from "./Hello";
import Test from "./Test";

function App(){
    return (
        <div>
            <h1>APP</h1>
            <h3>From inside src/app.js</h3>
        </div>
    )
}

ReactDOM.hydrate(<App />,document.getElementById("root"));