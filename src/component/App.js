import React, { Component } from "react";
import Animation from './Animation';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import Menu from "./Menu";

function App() {
    return(
        <>
            <Animation />
            <header id="nav-header">
                <Menu />
            </header>
            <HeaderComponent />
            <FooterComponent />
        </>
    );
}


export default App;