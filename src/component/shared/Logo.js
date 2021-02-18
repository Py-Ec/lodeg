import React, { Component } from "react";
import importaudio11 from '../../asset/audio/dl/11.mp3';

class Logo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    componentDidMount() {
        document.getElementById("logo-text").addEventListener("mouseenter", function() {
            let elemText = document.querySelectorAll("[class*='logo-t-']");
            let audio1 = new Audio(importaudio11);
            audio1.play();
            this.style.cursor = "pointer";
          
            let x = 0;
          
            elemText.forEach((elem) => {
                  elem.style.animation = "tLogo 1.5s linear " + x + "s" + " forwards";
                  x = x + 0.05;
              }
            );
            x = 0;
        });

        document.getElementById("logo-text").addEventListener("mouseleave", function() { 
            let elemText = document.querySelectorAll("[class*='logo-t-']");
            elemText.forEach((elem) => {
                setTimeout(()=> { elem.style.animation = "none"; } , 1600);
            })
        })
    }


    render() {

        const LogoOuter = this.props.logoOuter.map((x) => {
            return(
                <path key={x.id} className={x.class} d={x.d} stroke={x.stroke} strokeWidth={x.strokeWidth} fill={x.fill} />
            );
        });

        const LogoPath = this.props.logoPath.map((x) => {
            return(
                <g key={x.id}>
                    <path className={x.class} d={x.d} strokeWidth={x.strokeWidth} fill={x.fill} stroke={x.stroke} strokeLinecap={x.strokeLinecap} opacity={x.opacity} />
                    <path className={`${x.class}-copy`} d={x.d} strokeWidth={x.strokeWidth} fill={x.fill} stroke={x.stroke} strokeLinecap={x.strokeLinecap} opacity={x.opacity} />
                </g>
            );
        });

        const LogoCircle = this.props.logoPoint.map((x) => {
            return(
                <circle key={x.id} className={x.class} cx={x.cx} cy={x.cy} r={x.r} strokeWidth={x.strokeWidth} fill={x.fill} stroke={x.stroke} opacity={x.opacity} />
            );
        });

        const LogoTextZero = this.props.logoTextZero.map((x) => {
            return(
                <tspan key={x.id} className={x.class} dx={x.dx} dy={x.dy} fill={x.fill} style={x.style}>{x.name}</tspan>
            );
        })

        const styleZeroText = {
            fontFamily: "Arial, Helvetica, sansSerif",
             fontSize: "8px", 
        }

        const LogoText = this.props.logoText.map((x) => {
            return(
                <tspan key={x.id} className={x.class} dx={x.dx} dy={x.dy} fill={x.fill} style={x.style}>{x.name}</tspan>
            );
        })

        return(
          

<div id={"svg-logo"}>
    <svg className={"svg-logo"} viewBox={this.props.viewBox}>
        <defs>
            <linearGradient id={"first"} x1={"79.4%"} y1={"18.25%"} x2={"10%"} y2={"19.3%"} >
                <stop offset={"0%"} stopColor={"#a93134"} stopOpacity={"1"} />
                <stop offset={"100%"} stopColor={"#ec3136"} stopOpacity={"1"}/>
            </linearGradient>
            <linearGradient id={"second"} x1={"50%"} y1={"15%" }x2={"30%"} y2={"35%"} >
                <stop offset={"0%"} stopColor={"#109e30"} stopOpacity={"1"} />
                <stop offset={"100%"} stopColor={"#3bac32"} stopOpacity={"1"} />
            </linearGradient>
            <linearGradient id={"third"} x1={"23%"} y1={"39%"} x2={"42%"} y2={"70%"} >
                <stop offset={"0%"} stopColor={"#e47c00"} stopOpacity={"1"} />
                <stop offset={"100%"} stopColor={"#ed9900"} stopOpacity={"1"} />
            </linearGradient>
            <linearGradient id={"fourth"} x1={"75%"} y1={"70%"} x2={"31%"} y2={"60%"}>
                <stop offset={"0%"} stopColor={"#01379b"} stopOpacity={"1"}/>
                <stop offset={"100%"} stopColor={"#005db6"} stopOpacity={"1"}/>
            </linearGradient>
        </defs>
        <g>
            {LogoOuter}
            {LogoPath}
            {LogoCircle}
            <text id={"Zero-text"} x={this.props.LogoZeroX} y={this.props.LogoZeroY} style={styleZeroText}>
                {LogoTextZero}
            </text>
            <text id={"logo-text"} x={this.props.LogoTextX} y={this.props.LogoTextY} style={styleZeroText}>
                {LogoText}
            </text>
        </g>
</svg>
</div>
        );
    }

}

export default Logo;

