import React, { Component } from "react";
import Line from "./Line.js";
import Points from "./Point";
import Logo from "./Logo";
import importaudio1 from '../asset/audio/dl/1.mp3';
import importaudio5 from '../asset/audio/dl/5.mp3';
import importaudio7 from '../asset/audio/dl/7.mp3';
import importaudio11 from '../asset/audio/dl/11.mp3';

class Animation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winX: window.innerWidth,
            winY: window.innerHeight,
            pointTopX: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)],
            pointTopY: [Math.floor(Math.random() * 200),Math.floor(Math.random() * 200),Math.floor(Math.random() * 200),Math.floor(Math.random() * 200),Math.floor(Math.random() * 200)],
            pointBottomX: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)],
            pointBottomY: [window.innerHeight - Math.floor(Math.random() * 200),window.innerHeight - Math.floor(Math.random() * 200),window.innerHeight - Math.floor(Math.random() * 200),window.innerHeight - Math.floor(Math.random() * 200),window.innerHeight - Math.floor(Math.random() * 200)],
            pointLeftX: [Math.floor(Math.random() * 200),Math.floor(Math.random() * 200),Math.floor(Math.random() * 200)],
            pointLeftY: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)],
            pointRightX: [window.innerWidth - Math.floor(Math.random() * 200),window.innerWidth - Math.floor(Math.random() * 200),window.innerWidth - Math.floor(Math.random() * 200)],
            pointRightY: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)],

            // here the state of the other components 

            logoOuter: [
                {
                    id: "0",
                    class: "zero",
                    d: "M79.4 18.25 L67.8 26 A60 29 -26 0, 0 60 22.1 A46.5 16 0 0, 0 54.3 21.5 A21.3 21 0 0 , 0 32.8 40.1 L33 45.7 A25 21.7 0 0, 0 43.5 60.9 L48.79 63 A29.5 42 -10 0, 0 67.8 59 L79.2 66.6 A34 27.5 0 0, 1 51.2 76.7 L44.1 75.25  A34.5 34.5 0 0 , 1 19.4 39.2 L20.9 32.2  A35 34 -20 0, 1 47.6 8.9 L54.8 8.4  A32 25 44 0,1 79.4 18.25 Z",
                    stroke: "#043b3b",
                    strokeWidth: "2px",
                    fill: "none"
                },
                {
                    id: "1",
                    class: "first",
                    d: "M79.4 18.25 L67.8 26 A60 29 -26 0, 0  60 22.1 A10 19.3 -40.4 0, 0 54.8 8.4 A32 25 44 0,1 79.4 18.25",
                    stroke: "none",
                    strokeWidth: "none",
                    fill: "url(#first)"
                },
                {
                    id: "2",
                    class: "second",
                    d: "M47.6 8.9 A50.8 27 0 0,1 54.3 21.5 A21.3 21 0 0 , 0 32.8 40.1 A24 43 0 0 , 1 20.9 32.2 A35 34 -20 0, 1 47.6 8.9",
                    stroke: "none",
                    strokeWidth: "none", // if not working add o.1 
                    fill: "url(#second)"
                },
                {
                    id: "3",
                    class: "third",
                    d: "M19.4 39.2 A28 35 0 0, 0 33 45.7 A25 21.7 0 0, 0 43.5 60.9 A90 47 0 0, 0 44.1 75.25 A34.5 34.5 0 0 , 1 19.4 39.2",
                    stroke: "none",
                    strokeWidth: "none", // if not working add 0.1
                    fill: "url(#third)"
                },
                {
                    id: "4",
                    class: "fourth",
                    d: "M79.2 66.6 L67.8 59 A29.5 42 -10 0, 1 48.79 63 A19 18 0 0, 0 51.2 76.7 A34 27.5 0 0, 0 79.2 66.6",
                    stroke: "none",
                    strokeWidth: "none", // if not working add 0.1 
                    fill: "url(#fourth)"
                }
            ],

            logoPath:  [
                {
                    id: "0",
                    class: "logo-path",
                    d: "M42.63 27.5 V36 L38.5 39.8 V46.8 L42.3 50.2 V55",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "1",
                    class: "logo-path",
                    d: "M47.85 57.4 V46.4 L43.4 42.3",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "2",
                    class: "logo-path",
                    d: "M48.77 27.5 V38.8 L52.3 42 H60",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "3",
                    class: "logo-path",
                    d: "M54.378 27.5 V34.7",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "4",
                    class: "logo-path",
                    d: "M51.2 57.4 V52.5 L54.9 49",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "5",
                    class: "logo-path",
                    d: "M60.89 27.5 V33.6 L65.1 37.12",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "6",
                    class: "logo-path",
                    d: "M63.2 57.4 V49",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                },
                {
                    id: "7",
                    class: "logo-path",
                    d: "M68.7 57.4 V48.9 L72.8 45.2 V38 L69 34.7 V30",
                    strokeWidth: "1.3",
                    fill: "none", 
                    stroke: "#312d2e",
                    strokeLinecap: "round",
                    opacity: "1"
                }
            ],


            logoCircle : [
                {
                    id: "0",
                    class: "circle-ani-1",
                    cx: "42.2",
                    cy: "55.5",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#2c648c",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "1",
                    class: "circle-ani-2",
                    cx: "42.9",
                    cy: "42",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#6cbfda",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "2",
                    class: "circle-ani-3",
                    cx: "59.9",
                    cy: "42",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#ffebee",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "3",
                    class: "circle-ani-4",
                    cx: "54.3",
                    cy: "34.7",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#2c648c",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "4",
                    class: "circle-ani-5",
                    cx: "55.1",
                    cy: "49",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#6cbfda",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "5",
                    class: "circle-ani-6",
                    cx: "65.7",
                    cy: "37.7",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#6cbfda",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "6",
                    class: "circle-ani-7",
                    cx: "63.2",
                    cy: "49",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#2c648c",
                    stroke: "#312d2e",
                    opacity: "1"
                },
                {
                    id: "7",
                    class: "circle-ani-8",
                    cx: "69",
                    cy: "29.4",
                    r: "1.8",
                    strokeWidth: "1.3",
                    fill: "#ffebee",
                    stroke: "#312d2e",
                    opacity: "1"
                }
            ]
        }
    }



    

    render() {
        const color0 = "#5A6351"; // #5A6351 make change the color code

        const winX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const winY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        

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
          
            
          
        //     let countPath = 0;
          
        //     setTimeout(()=> {
        //       let elemLogoPath = document.querySelectorAll(".logo-path-copy");
        //       let elemPath = document.querySelectorAll(".makePathCopy");
        //       let elemTopPath = document.querySelectorAll(".makePathTopCopy");
        //       let elemTopBootm = document.querySelectorAll(".makePathBootmCopy");
        //       let elemTopLeft = document.querySelectorAll(".makePathLeftCopy");
        //       let elemTopRight = document.querySelectorAll(".makePathRightCopy");
        //       let audio14 = new Audio(importaudio14);
        //       let audio8 = new Audio(importaudio8);
        //       let audio15 = new Audio(importaudio15);
        //       let audio16 = new Audio(importaudio16);
        //       console.log("is this working or not");
        //       var x = setInterval(() => {
        //         //audio15.play();
        //          audio16.play();
        //       },800);
          
        //       setTimeout(() => {
        //         audio8.play()
        //       }, 7000)
        //       // countPath++;
        //       audio14.playbackRate = 0.6;
        //       audio14.play();
        //       setTimeout(()=> {
        //         // elemPath.style.animationName = "xyz" + countPath;
        //         audio14.playbackRate = 1;
        //         clearInterval(x);
        //         elemLogoPath.forEach(
        //           function(x) {
        //             x.style.animation = "none";
        //         });
        //         elemPath.forEach(
        //           function(x) {
        //             // x.classList.remove("makePathCopy");
        //             x.style.animation = "none";
        //         });
        //         elemTopPath.forEach(
        //           function(x) {
        //             // x.classList.remove("makePathTopCopy");
        //             x.style.animation = "none";
        //         });
        //         elemTopRight.forEach(
        //           function(x) {
        //             x.style.animation = "none";
        //             // x.classList.remove("makePathRightCopy");
        //         });
        //         elemTopBootm.forEach(
        //           function(x) {
        //             x.style.animation = "none";
        //             // x.classList.remove("makePathBootmCopy");
        //         });
        //         elemTopLeft.forEach(
        //           function(x) {
        //             x.style.animation = "none";
        //             // x.classList.remove("makePathLeftCopy");
        //         });
          
        //       }, 8300);
        //     } , 3000);
        });


        // document.getElementById("logo-text").addEventListener("mouseenter", function() {
        //     let elemText = document.querySelectorAll("[class*='logo-t-']");
        //     let audio1 = new Audio(importaudio11);
        //     audio1.play();
        //     this.style.cursor = "pointer";
          
        //     let x = 0;
          
        //     elemText.forEach((elem) => {
        //           elem.style.animation = "tLogo 1.5s linear " + x + "s" + " forwards";
        //           x = x + 0.05;
        //       }
        //     );
        //     x = 0;
        // });

        // document.getElementById("logo-text").addEventListener("mouseleave", function() { 
        //     let elemText = document.querySelectorAll("[class*='logo-t-']");
        //     elemText.forEach((elem) => {
        //         setTimeout(()=> { elem.style.animation = "none"; } , 1600);
        //     })
        // })


        
        const pointTLBR = this.state.pointTopX.map((x,y) => {
            if(y<3) {
                return(
                    <g key={y}>
                        <path className={"makePath"} d={`M ${x} -40 V ${this.state.pointTopY[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                        <path className={"makePathCopy"} d={`M ${x} -40 V ${this.state.pointTopY[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                        <path className={"makePath"} d={`M ${this.state.pointBottomX[y]} ${this.state.pointBottomY[y]} V ${this.state.winY + 40}`} fill={"none"} stroke={color0} strokeWidth={1} />
                        <path className={"makePathCopy"} d={`M ${this.state.pointBottomX[y]} ${this.state.pointBottomY[y]} V ${this.state.winY + 40}`} fill={"none"} stroke={color0} strokeWidth={1} />
                        <path className={"makePath"} d={`M -40 ${this.state.pointLeftY[y]} H ${this.state.pointLeftX[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                        <path className={"makePathCopy"} d={`M -40 ${this.state.pointLeftY[y]} H ${this.state.pointLeftX[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                        <path className={"makePath"} d={`M ${this.state.winX * 3 } ${this.state.pointRightY[y]} H ${this.state.pointRightX[y]}`} fill={"none"} stroke={color0} strokeWidth={1} />
                        <path className={"makePathCopy"} d={`M ${this.state.winX + 40} ${this.state.pointRightY[y]} H ${this.state.pointRightX[y]}`} fill={"none"} stroke={color0} strokeWidth={1} />
                        <circle className={"makeCircle"} cx={this.state.pointTopX[y]} cy={this.state.pointTopY[y]} r={3 + "px"} fill={color0} />
                        <circle className={"makeCircle"} cx={this.state.pointBottomX[y]} cy={this.state.pointBottomY[y]} r={3 + "px"} fill={color0} />
                        <circle className={"makeCircle"} cx={this.state.pointLeftX[y]} cy={this.state.pointLeftY[y]} r={3 + "px"} fill={color0} />
                        <circle className={"makeCircle"} cx={this.state.pointRightX[y]} cy={this.state.pointRightY[y]} r={3 + "px"} fill={color0} />
                    </g>
                );
            }
            else {
                return(
                    <g key={y}>
                        <path className={"makePath"} d={`M ${x} -40 V ${this.state.pointTopY[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                        <path className={"makePathCopy"} d={`M ${x} -40 V ${this.state.pointTopY[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                        <path className={"makePath"} d={`M ${this.state.pointBottomX[y]} ${this.state.pointBottomY[y]} V ${this.state.winY + 40}`} fill={"none"} stroke={color0} strokeWidth={1} />
                        <path className={"makePathCopy"} d={`M ${this.state.pointBottomX[y]} ${this.state.pointBottomY[y]} V ${this.state.winY + 40}`} fill={"none"} stroke={color0} strokeWidth={1} />
                        <circle className={"makeCircle"} cx={this.state.pointTopX[y]} cy={this.state.pointTopY[y]} r={3 + "px"} fill={color0} />
                        <circle className={"makeCircle"} cx={this.state.pointBottomX[y]} cy={this.state.pointBottomY[y]} r={3 + "px"} fill={color0} />
                    </g>
                );
            }
        });

        return(
            <div className={"bg-svg"}>
                <svg id={"bg-animation"}>
                    <g>
                        <Line />
                    </g>
                    <g>
                        {<Points />}
                    </g>
                    <g>
                        {pointTLBR}
                    </g>
                </svg>
                <div id={"svg-logo"}>
                    <svg className={"svg-logo"} viewBox={"0 0 100 100"}>
                        <defs>
                            <linearGradient id={"first"} x1={"79.4%"} y1={"18.25%"} x2={"10%"} y2={"19.3%"} >
                                <stop offset={"0%"} stop-color={"#a93134"} stop-opacity={"1"} />
                                <stop offset={"100%"} stop-color={"#ec3136"} stop-opacity={"1"}/>
                            </linearGradient>
                            <linearGradient id={"second"} x1={"50%"} y1={"15%" }x2={"30%"} y2={"35%"} >
                                <stop offset={"0%"} stop-color={"#109e30"} stop-opacity={"1"} />
                                <stop offset={"100%"} stop-color={"#3bac32"} stop-opacity={"1"} />
                            </linearGradient>
                            <linearGradient id={"third"} x1={"23%"} y1={"39%"} x2={"42%"} y2={"70%"} >
                                <stop offset={"0%"} stop-color={"#e47c00"} stop-opacity={"1"} />
                                <stop offset={"100%"} stop-color={"#ed9900"} stop-opacity={"1"} />
                            </linearGradient>
                            <linearGradient id={"fourth"} x1={"75%"} y1={"70%"} x2={"31%"} y2={"60%"}>
                                <stop offset={"0%"} stop-color={"#01379b"} stop-opacity={"1"}/>
                                <stop offset={"100%"} stop-color={"#005db6"} stop-opacity={"1"}/>
                            </linearGradient>
                        </defs>
                        <Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle}/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Animation;