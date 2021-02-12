import React, { Component } from 'react';
import ReactDom from "react-dom";

class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            logoImg: "",
            LogoText: ""
        }
    }

    render() {
        return(
            <nav className={"nav"}>
                <div className={"menu-btn"}>
                    <div className={"menu-bar-1"}></div>
                    <div className={"menu-bar-2"}></div>
                    <div className={"menu-bar-3"}></div>
                </div>
                <div className={"nav-logo"}>
                    
                </div>
            </nav>
        );
    }
}

export default Menu;

ReactDom.render(<Menu /> , document.getElementById("nav-header"));