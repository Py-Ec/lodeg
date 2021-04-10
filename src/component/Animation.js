import React, { Component } from "react";
import Bubble from "./shared/Bubble";

import importaudio1 from '../asset/audio/dl/1.mp3';
import importaudio5 from '../asset/audio/dl/5.mp3';
import importaudio7 from '../asset/audio/dl/7.mp3';
import importaudio11 from '../asset/audio/dl/11.mp3';


import LogoOuter from './shared/Logo/LogoOuter';
import LogoPath from './shared/Logo/LogoPath';
import LogoCircle from './shared/Logo/LogoCircle';
import LogoTextZero from './shared/Logo/LogoTextZero';
import LogoText from './shared/Logo/LogoText';

class Animation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winX: window.innerWidth,
            winY: window.innerHeight,
            
            // here the state of the other components 

            logoOuter: LogoOuter,
            logoPath:  LogoPath,
            logoCircle : LogoCircle,
            logoTextZero : LogoTextZero,
            logoText : LogoText
        }
    }

    render() {

        window.addEventListener("load", () => {
            setTimeout(()=> {
              let audio1 = new Audio(importaudio1);
              let audio11 = new Audio(importaudio11);
              audio1.play();
              audio11.play();
            } , 0);
          
            setTimeout(()=> {
              let audio2 = new Audio(importaudio5);
              //let audio3 = new Audio();
              let audio11 = new Audio(importaudio11);
              let audio7 = new Audio(importaudio7);
              audio2.play();
              //audio3.play();
              audio11.play();
              audio7.play();
            } , 1700);
        });




        return(
            <div className={"bg-svg"}>
                <Bubble />
            </div>
        );
    }
}

export default Animation;