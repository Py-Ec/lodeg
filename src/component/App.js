import React, { Component } from "react";
import Animation from './Animation';
import Header from './Header';
import Footer from './Footer';
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";

function App() {
    return(
        <>
            <Animation />
            <header id="nav-header">
                <TopMenu />
            </header>
            <main className="main-container">
                <div className="menu-left">
                    <LeftMenu />
                </div>
                <div className="main-content">
                    <Header />
                    <Footer />
                </div>
            </main>
        </>
    );
}


export default App;