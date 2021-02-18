import  React,  { Component } from "react";
import Logo from './shared/Logo';


import LogoOuter from './shared/Logo/LogoOuter';
import LogoPath from './shared/Logo/LogoPath';
import LogoCircle from './shared/Logo/LogoCircle';
import LogoTextZero from './shared/Logo/LogoTextZero';
import LogoText from './shared/Logo/LogoText';



import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';



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
        return(
            <header className="Header-section">
                <div className="slide-container">

                    <div className="slides">
                        <div className="slide-item">
                            <div className="detailAbout">
                                <div  className="card-img"><Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY} /></div>
                                <div className="card-text">
                                    <h4></h4>
                                    Coders Lodge is the codding group that help you to shap you knowlage and build the coding life. and we are here with some content for codding comptition </div>
                                <a href="#" className="card-buttn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="slide-item">
                            <div className="detailAbout">
                                <div  className="card-img"><Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY} /></div>
                                <div className="card-text">
                                    <h4></h4>
                                    Coders Lodge is the codding group that help you to shap you knowlage and build the coding life. and we are here with some content for codding comptition </div>
                                <a href="#" className="card-buttn">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="slides">
                        <div className="slide-item">
                            <div className="detailAbout">
                                <div  className="card-img"><Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY} /></div>
                                <div className="card-text">
                                    <h4></h4>
                                    Coders Lodge is the codding group that help you to shap you knowlage and build the coding life. and we are here with some content for codding comptition </div>
                                <a href="#" className="card-buttn">Read More</a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="dot-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </header>
        );
    }
}



export default HeaderComponent;