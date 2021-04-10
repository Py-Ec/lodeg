import React, { Component } from 'react';
import Animation from './Animation';
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import Footer from './Footer';
import Home from './Home';


import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Animation />
                <header id="nav-header">
                    <TopMenu />
                </header>
                <main className="main-container">
                    <div className="menu-left">
                        <LeftMenu />
                    </div>
                    <div className="main-content">
                        <BrowserRouter>
                            <Switch>
                                <Route path="/home" component={() => <Home />} />
                                {/* <Route exact path="/services" component={() => <Services />} />
                                <Route path="/services/coding-competition-team" component={() => <FormCCT />} />
                                <Route path="/services/project-partner-program" component={() => <Services />} />
                                <Route path="/contactus" component={() => <Contact />} />
                                <Route path="/aboutus" component={() => <About />} /> */}
                                <Redirect to="/home" />
                            </Switch>
                        </BrowserRouter>
                        <Footer />
                    </div>
                </main>
            </div>
        );
    }
}

export default Main;