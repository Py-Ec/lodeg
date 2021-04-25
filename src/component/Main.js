import React, { Component } from 'react';
import Animation from './Animation';
import LeftMenu from "./LeftMenu";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }

        this.menuFunction = this.menuFunction.bind(this);
    }

    menuFunction() {
        this.setState({
            status: !this.state.status,
        });
        const ShowLeftMenu = document.getElementById("show-nav-item");
        const leftMenu = document.getElementsByClassName("menu-left")[0];
        const navElem = document.getElementsByClassName("nav")[0];
        
        if(this.state.status) {
            ShowLeftMenu.classList.remove("show-nav-item");
            navElem.classList.remove("show-nav-item");
            leftMenu.style.zIndex = 0;
        }
        else {
            ShowLeftMenu.classList.add("show-nav-item");
            navElem.classList.add("show-nav-item");
            leftMenu.style.zIndex = 100;
        }
    }


    render() {
        return(
            <>
                <Animation />
                {/* Header file should be in the Home component only
                    so if we use Multiple Route component 
                    then we have to design according to render in home component */}
                
                <Header MenuFunction={() => this.menuFunction()} /> 

                <main className="main-container">
                    <div className="menu-left">
                        <LeftMenu />
                    </div>
                    <div className="main-content">
                        <BrowserRouter>
                            <Switch>
                                <Route path="/home" component={() => <Home />} />
                                <Redirect to="/home" />
                            </Switch>
                        </BrowserRouter>
                        <Footer />
                    </div>
                </main>
            </>
        );
    }
}

export default Main;