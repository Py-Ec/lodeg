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
        const headerElem = document.getElementsByClassName("header-container")[0];
        
        if(this.state.status) {
            ShowLeftMenu.classList.remove("show-nav-item");
            navElem.classList.remove("show-nav-item");
            // navElem.style.position = null;
            // navElem.style.top = null;
            headerElem.style.marginTop = null;
            // navElem.style.backgroundColor = null;
            leftMenu.style.zIndex = 0;
        }
        else {
            ShowLeftMenu.classList.add("show-nav-item");
            navElem.classList.add("show-nav-item");
            // navElem.style.position = "fixed";
            // navElem.style.top = "0px";
            // navElem.style.backgroundColor = "#0b0c10";
            headerElem.style.marginTop = "75px";
            leftMenu.style.zIndex = 100;
        }

        
    }


    render() {
        // window.addEventListener('scroll',() => {
        //     const navElem = document.getElementsByClassName("nav")[0];
        //     if(window.scrollY + 75 > window.innerHeight) {
        //         navElem.style.position = "fixed";
        //         navElem.style.top = "0px";
        //         navElem.style.backgroundColor = "#0b0c10";
        //     }
        //     else {
        //         navElem.style.position = null;
        //         navElem.style.top = null;
        //         navElem.style.backgroundColor = null;
        //     }
        // });

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