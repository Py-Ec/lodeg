import React, { Component } from "react";
import ReactDOM from 'react-dom';
import importaudio1 from '../asset/audio/dl/1.mp3';
import importaudio2 from '../asset/audio/dl/2.mp3';
import importaudio3 from '../asset/audio/dl/3.mp3';
import importaudio4 from '../asset/audio/dl/4.mp3';
import importaudio5 from '../asset/audio/dl/5.mp3';
import importaudio6 from '../asset/audio/dl/6.mp3';
import importaudio7 from '../asset/audio/dl/7.mp3';
import importaudio8 from '../asset/audio/dl/8.mp3';
import importaudio9 from '../asset/audio/dl/9.mp3';
import importaudio10 from '../asset/audio/dl/10.mp3';
import importaudio11 from '../asset/audio/dl/11.mp3';
import importaudio12 from '../asset/audio/dl/12.mp3';
import importaudio13 from '../asset/audio/dl/13.mp3';
import importaudio14 from '../asset/audio/dl/14.mp3';
import importaudio15 from '../asset/audio/dl/15.mp3';
import importaudio16 from '../asset/audio/dl/16.mp3';





class Animation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winX: window.innerWidth,
            winY: window.innerHeight
        }
    }

    

    render() {
        const color0 = "#5A6351"; // #5A6351 make change the color code
        const color6 = "#0ed4e3";

        const lineY = []; 
        const lineX = [];
        const circleCodX = [];
        const circleCodY = [];
        const moveX = []; // move some distance into x direction
        const pathD = [];
        var circleLeftCodX = []; 
        var circleLeftCodY = [];
        var circleTopCodX = [];
        var circleTopCodY = [];
        var circleBottomCodX = [];
        var circleBottomCodY = [];
        var circleRightCodX = [];
        var circleRightCodY = []; 

        const winX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const winY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        ["load", "resize"].forEach(elem => {
            window.addEventListener(elem, () => {
                this.setState({
                    winX: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    winY: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                })
                
            });
        });

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
                  elem.style.animation = "tLogo 1s linear " + x + "s" + " forwards";
                  x = x + 0.05;
              }
            );
            x = 0;
          });

        document.getElementById("logo-text").addEventListener("mouseleave", function() { 
            let elemText = document.querySelectorAll("[class*='logo-t-']");
            elemText.forEach((elem) => {
                setTimeout(()=> { elem.style.animation = "none"; } , 1200);
            })
        })

    



        //geting the coordinate for line 'lineX' and 'lineY' and push into the array

        for(let i=0, y=0; i < winY; i = i + 20, y++) {
            lineY[y] = i;
        }
    
        for(let i=0, y=0; i < winX; i = i + 20, y++) {
            lineX[y] = i;
        }

        // for each array element we have one line called path 

        const lineHori = lineY.map((x,y) => {
            return(
                <path key={y} className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + 0 + " " + x + "L" + this.state.winX + " " + x} />
            );
        });

        const lineVert = lineX.map((x,y) => {
            return(
                <path key={y} className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + x + " " + 0 + "L" + x + " " + this.state.winY} />
            );
        });

        // random circle on screen 

        for(let i = 0; i < 30; i++) {
            circleCodX[i] = Math.floor(Math.random() * winX); 
            circleCodY[i] = Math.floor(Math.random() * winY); 
        }

        circleCodY.sort((a, b) => a - b); // sorting the arrary of 'cordY' in ascending order
        
        const makeCircle = circleCodX.map((x,y) => { //plotting the circle point on the screen
            return(
                <circle key={y}  className={"makeCircle"} cx={x} cy={circleCodY[y]} r={3 + "px"} fill={color0}/>
            );
        });


        for(let i = 0, j = 1 ; i < 30; i++ , j++ ) {
            if(circleCodX[i] < circleCodX[j]) {
                moveX[i] = circleCodX[i] + Math.random() * Math.abs((circleCodX[i] - circleCodX[j]));
                pathD[i] = `M${circleCodX[i]} ${circleCodY[i]} H${moveX[i]}L${moveX[i] + Math.abs(circleCodY[i] - circleCodY[j])} ${circleCodY[j]} L${circleCodX[j]} ${circleCodY[j]}`;
            }
            else {
                moveX[i] = circleCodX[i] - Math.random() * Math.abs(circleCodX[i] - circleCodX[j]);
                pathD[i] =  `M${circleCodX[i]} ${circleCodY[i]} H${moveX[i]}L${moveX[i] - Math.abs(circleCodY[i] - circleCodY[j])} ${circleCodY[j]} L${circleCodX[j]} ${circleCodY[j]}`;
            }
            i++;
            j++;
        }

        const path = pathD.filter((x) => {
            if(x != undefined) {
                return x;
            }
        });


        const makePath = path.map((x,y) => {
            return(
                <g key={y}>
                    <path className={"makePath"} d={x} stroke={color0} fill={"none"} strokeWidth={1}/>
                    <path className={"makePathCopy"} d={x} stroke={color0} fill={"none"} strokeWidth={1}/>
                </g>
            );
        });


        for(let i = 0 ; i < 5; i++) { // making the random point for circle from top and bottom 
            circleTopCodX[i] =  Math.floor(Math.random() * winX);
            circleTopCodY[i] = Math.floor(Math.random() * 200);
            circleBottomCodX[i] =  Math.floor(Math.random() * winX);
            circleBottomCodY[i] = winY - Math.floor(Math.random() * 200);
        }
        
        for(let i = 0 ; i < 3; i++) { // making the random point for circle from left and right 
            circleLeftCodX[i] =  Math.floor(Math.random() * 200);
            circleLeftCodY[i] = Math.floor(Math.random() * winY);
            circleRightCodX[i] = winX - Math.floor(Math.random() * 200);
            circleRightCodY[i] = Math.floor(Math.random() * winY);
        }
        
        const makeCircleTB = circleTopCodX.map((x,y) => {
            return(
                <g key={y}>
                    <circle className={"makeCircle"} cx={circleTopCodX[y]} cy={circleTopCodY[y]} r={3 + "px"} fill={color0} />
                    <circle className={"makeCircle"} cx={circleBottomCodX[y]} cy={circleBottomCodY[y]} r={3 + "px"} fill={color0} />
                </g>
            );
        });

        const makeCircleLR = circleLeftCodX.map((x,y) => {
            return(
                <g key={y}>
                    <circle className={"makeCircle"} cx={circleLeftCodX[y]} cy={circleLeftCodY[y]} r={3 + "px"} fill={color0} />
                    <circle className={"makeCircle"} cx={circleRightCodX[y]} cy={circleRightCodY[y]} r={3 + "px"} fill={color0} />
                </g>
            );
        });


        const makePathTB = makeCircleTB.map((x,y) => {
            return(
                <g key={y}>
                    <path className={"makePath"} d={`M ${circleTopCodX[y]} -40 V ${circleTopCodY[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                    <path className={"makePathCopy"} d={`M ${circleTopCodX[y]} -40 V ${circleTopCodY[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                    <path className={"makePath"} d={`M ${circleBottomCodX[y]} ${circleBottomCodY[y]} V ${winY + 40}`} fill={"none"} stroke={color0} strokeWidth={1} />
                    <path className={"makePathCopy"} d={`M ${circleBottomCodX[y]} ${circleBottomCodY[y]} V ${winY + 40}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                </g> 
            );
        });

        const makePathLR = makeCircleLR.map((x,y) => {
            return(
                <g key={y}>
                    <path className={"makePath"} d={`M -40 ${circleLeftCodY[y]} H ${circleLeftCodX[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                    <path className={"makePathCopy"} d={`M -40 ${circleLeftCodY[y]} H ${circleLeftCodX[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                    <path className={"makePath"} d={`M ${winX + 40} ${circleRightCodY[y]} H ${circleRightCodX[y]}`} fill={"none"} stroke={color0} strokeWidth={1} />
                    <path className={"makePathCopy"} d={`M ${winX + 40}  ${circleRightCodY[y]} H ${circleRightCodX[y]}`} fill={"none"} stroke={color0} strokeWidth={1}/>
                </g> 
            );
        });
       

       

        

        

        
      
        return(
            <svg viewBox={"0 0 " + this.state.winX + " " + this.state.winY}>
                <g>
                    {lineHori}
                </g>
                <g>
                    {lineVert}
                </g>
                <g>
                    {makePath}
                </g>
                <g>
                    {makeCircle}
                </g>
                <g>
                    {makePathTB}
                </g>
                <g>
                    {makePathLR}
                </g>
                <g>
                    {makeCircleTB}
                </g>
                <g>
                    {makeCircleLR}
                </g>
            </svg>
        );
    }
}

export default Animation;


ReactDOM.render(<Animation />, document.getElementById("bg-animation"));