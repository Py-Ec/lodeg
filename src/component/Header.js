import  React,  { Component } from "react";
import Logo from './shared/Logo';


import LogoOuter from './shared/Logo/LogoOuter';
import LogoPath from './shared/Logo/LogoPath';
import LogoCircle from './shared/Logo/LogoCircle';
import LogoTextZero from './shared/Logo/LogoTextZero';
import LogoText from './shared/Logo/LogoText';


import SwiperCore, {EffectCoverflow} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';


SwiperCore.use([EffectCoverflow]);


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
                <div className="slide-container" style={{width: `${winX}px`}}>
                    <Swiper effect="Overflow"
                        spaceBetween={SpcBtw}
                        slidesPerView={SlideView}>

                    <SwiperSlide>
                        <div className="slides">
                            <div className="slide-item">
                                <div className="detailAbout">
                                    <div className="card-info">
                                        <div  className="card-img">
                                            <Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY} />
                                        </div>
                                        <div className="card-text">
                                            <h2>Coders Lodge</h2>
                                            <p>
                                                Coders Lodge is the codding group that help you to shape you knowledge and build the coding life. and we are here with some content for codding competition
                                            </p>
                                            <a href="#" className="card-buttn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slides">
                            <div className="slide-item">
                                <div className="detailAbout">
                                    <div className="card-info">
                                        <div  className="card-img">
                                            <Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY} />
                                        </div>
                                        <div className="card-text">
                                            <h2>Coders Lodge</h2>
                                            <p>
                                                Coders Lodge is the codding group that help you to shape you knowledge and build the coding life. and we are here with some content for codding competition
                                            </p>
                                            <a href="#" className="card-buttn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slides">
                            <div className="slide-item">
                                <div className="detailAbout">
                                    <div className="card-info">
                                        <div  className="card-img">
                                            <Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY} />
                                        </div>
                                        <div className="card-text">
                                            <h2>Coders Lodge</h2>
                                            <p>
                                                Coders Lodge is the codding group that help you to shape you knowledge and build the coding life. and we are here with some content for codding competition
                                            </p>
                                            <a href="#" className="card-buttn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                        {/* <div className="dot-container">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div> */}
                    </Swiper>

                </div>

                
            </header>
        );
    }
}



export default HeaderComponent;