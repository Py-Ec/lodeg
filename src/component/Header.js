import  React,  { Component } from "react";
import Logo from './shared/Logo';


import LogoOuter from './shared/Logo/LogoOuter';
import LogoPath from './shared/Logo/LogoPath';
import LogoCircle from './shared/Logo/LogoCircle';
import LogoTextZero from './shared/Logo/LogoTextZero';
import LogoText from './shared/Logo/LogoText';



class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoOuter: LogoOuter,
            logoPath:  LogoPath,
            logoCircle : LogoCircle,
            logoTextZero : LogoTextZero,
            logoText : LogoText,

            viewBox: "8 5 85 85",
            LogoZeroX: "25",
            LogoZeroY: "84.8",
            LogoTextX: "25",
            LogoTextY: "84.8"
        }
    }

    render() {
        let winX = window.innerWidth;
        let winY = window.innerHeight;
        let SpcBtw;
        let SlideView;

        if(winX < 600) {
            SpcBtw = 25;
            SlideView = 1.35;
        }
        else {
            winX = winX - 50;
            SpcBtw = 0;
            SlideView = 1;
        }

        window.addEventListener("resize", ()=> {
            winX = window.innerWidth;

        })

        return(
            <header className="Header-section">
                <div className="Header-container" style={{width: `${winX}px`, height: `${winY-75}px`}}>
                
                </div>
            </header>
        );
    }
}



export default HeaderComponent;