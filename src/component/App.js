import React, { Component } from "react";
import Animation from './Animation';
import Section from './Section';
import Menu from "./Menu";

class App extends Component {


    render() {
        return(
            <div className={"main"} >
                <div className={"Animation"}>
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