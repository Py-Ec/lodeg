import React, { Component } from 'react';
import './asset/scss/main.scss';
// import './asset/js/main.js';
import ReactDOM from 'react-dom';
import Menu from './component/Menu.js';
import Animation from "./component/Animation.js";
import Logo from "./component/Logo.js";


class Main extends Component {
    render() {
        return(
            <div>
               <Menu /> 
            </div>
        );
    }
}

export default Main;

//ReactDOM.render(<Main />, document.getElementById("test-react"));