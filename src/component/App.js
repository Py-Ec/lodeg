import React, { Component } from "react";
import Animation from './Animation';
import Menu from "./Menu";

class App extends Component {


    render() {
        return(
            <div className={"main"} >
                <div class={"Animation"}>
                    <Animation />
                </div>
                <header id="nav-header">
                    <Menu />
                </header>
            </div>
        );
    }
}


export default App;