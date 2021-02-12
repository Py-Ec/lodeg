import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Line from "./Line.js";
import Points from "./Point";
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
            pointRightY: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)]
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
            <g>
                <Line />
                {<Points />}
                {pointTLBR}
            </g>
        );
    }
}

export default Animation;

ReactDOM.render(<Animation />, document.getElementById("bg-animation"));