import React, { Component } from "react";
import Animation from './Animation';
import Header from './Header';
import Footer from './Footer';
import Menu from "./Menu";

function App() {
    return(
        <>
            <Animation />
            <header id="nav-header">
                <Menu />
            </header>
            <main className="main-content">
                <Header />
                <Footer />
            </main>
        </>
    );
}


export default App;