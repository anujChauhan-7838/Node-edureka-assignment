import React from "react";
import  ReactDOM  from "react-dom";
import { Outlet, Link } from "react-router-dom";


function Hello(){
    return (
        <div>
            <h1>Hello</h1>
            <h3>From inside src/app.js</h3>
            {/* <Link to={'/app'}>Test.js</Link> */}
        </div>
    )
}

export default Hello