"use strict";

import iaudio1 from '../audio/dl/1.mp3';
import importaudio2 from '../audio/dl/2.mp3';
import importaudio3 from '../audio/dl/3.mp3';
import importaudio4 from '../audio/dl/4.mp3';
import importaudio5 from '../audio/dl/5.mp3';
import importaudio6 from '../audio/dl/6.mp3';
import importaudio7 from '../audio/dl/7.mp3';
import importaudio8 from '../audio/dl/8.mp3';
import importaudio9 from '../audio/dl/9.mp3';
import importaudio10 from '../audio/dl/10.mp3';
import importaudio11 from '../audio/dl/11.mp3';
import importaudio12 from '../audio/dl/12.mp3';
import importaudio13 from '../audio/dl/13.mp3';
import importaudio14 from '../audio/dl/14.mp3';
import importaudio15 from '../audio/dl/15.mp3';
import importaudio16 from '../audio/dl/16.mp3';


var winX = window.innerWidth;
var winY = window.innerHeight;






// cordinate of the page

// function myFunction(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   var actualHeight = (window.innerHeight - 400) / 2 - 10;
//   var actualWidth = (window.innerWidth - 400) / 2 - 10;
//   var coor = "Coordinates: (" + (x - actualWidth) / 5 + "," + (y - actualHeight) / 5 + ")";
//   document.getElementById("test-out").innerHTML = coor;
// }

// function clearCoor() {
//   document.getElementById("test-out").innerHTML = "";
// }

// end


// for(let i=0; i < winY; i = i + 20) {
//   var circuit = document.getElementById("circuit");
//   let line = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   line.setAttribute("fill", "none");
//   line.setAttribute("stroke", "#0ed4e3"); //color6 in sass
//   line.setAttribute("stroke-width", "0.5");
//   line.setAttribute("stroke-opacity","0.1");
//   line.setAttribute("d", "M" + 0 + " " + i + "L" + winX + " " + i);
//   line.setAttribute("class", "line" + Math.floor(Math.random() * 10));

  

//   circuit.appendChild(line);
  
//   //console.log(winY + " " + winX );
  
// }

//  let xyz = document.getElementsByClassName("line1")[0].getBoundingClientRect().y;


 //console.log(xyz);

// for(let j=0; j<= winX; j = j + 20) {
//   let line = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   line.setAttribute("fill", "none");
//   line.setAttribute("stroke", "#0ed4e3");
//   line.setAttribute("stroke-width", "0.5");
//   line.setAttribute("stroke-opacity","0.1");
//   line.setAttribute("d", "M" + j + " " + 0 + "L" + j + " " + winY);
//   line.setAttribute("class", "line" + Math.floor(Math.random() * 10));

  

//   circuit.appendChild(line);

// }

// here I am done with 

function randCircle() {
 
  

  // for(let i = 0 ; i < 30; i++) {
  //   circleCodX[i] =  Math.floor(Math.random() * (winX)); 
  //   circleCodY[i] =  Math.floor(Math.random() * (winY)); 
  // }


  // circleCodY.sort((a, b) => a - b);

  // for(let i = 0, j = 1 ; i < 30; i++, j++) {
  //     let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //     circle.setAttribute("cx", circleCodX[i]);
  //     circle.setAttribute("cy", circleCodY[i]);
  //     circle.setAttribute("r", 3 + "px");
  //     circle.setAttribute("fill", "#043b3b"); //color0
  //     circle.setAttribute("class",  "makeCircle");

      

  //     circuit.appendChild(circle);
  //   }
 

  

  // for(let i = 0, j = 1 ; i < 30; i++ , j++ ) {
  //     let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     let pathCopy = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     if(circleCodX[i] < circleCodX[j]) {
  //       MoveX[i] = circleCodX[i] + Math.random() * Math.abs((circleCodX[i] - circleCodX[j]));
  //       path.setAttribute("d", `M${circleCodX[i]} ${circleCodY[i]} H${MoveX[i]}L${MoveX[i] + Math.abs(circleCodY[i] - circleCodY[j])} ${circleCodY[j]} L${circleCodX[j]} ${circleCodY[j]}`);
  //       pathCopy.setAttribute("d", `M${circleCodX[i]} ${circleCodY[i]} H${MoveX[i]}L${MoveX[i] + Math.abs(circleCodY[i] - circleCodY[j])} ${circleCodY[j]} L${circleCodX[j]} ${circleCodY[j]}`);
  //     }
  //     else {
  //       MoveX[i] = circleCodX[i] - Math.random() * Math.abs(circleCodX[i] - circleCodX[j]);
  //       path.setAttribute("d", `M${circleCodX[i]} ${circleCodY[i]} H${MoveX[i]}L${MoveX[i] - Math.abs(circleCodY[i] - circleCodY[j])} ${circleCodY[j]} L${circleCodX[j]} ${circleCodY[j]}`);
  //       pathCopy.setAttribute("d", `M${circleCodX[i]} ${circleCodY[i]} H${MoveX[i]}L${MoveX[i] - Math.abs(circleCodY[i] - circleCodY[j])} ${circleCodY[j]} L${circleCodX[j]} ${circleCodY[j]}`);
  //     }
  //     i++;
  //     j++;
  //     path.setAttribute("stroke", "#043b3b"); //043b3b
  //     path.setAttribute("stroke-width", 1);
  //     path.setAttribute("fill", "none");
  //     path.setAttribute("class",  "makePath");
  //     pathCopy.setAttribute("class",  "makePathCopy");
  //     circuit.appendChild(path);
  //     circuit.appendChild(pathCopy);
  // }

 
 

  // for(let i = 0 ; i < 5; i++) {
  //   circleTopCodX[i] =  Math.floor(Math.random() * winX);
  //   circleTopCodY[i] = Math.floor(Math.random() * 200);
  //   circleBottomCodX[i] =  Math.floor(Math.random() * winX);
  //   circleBottomCodY[i] = winY - Math.floor(Math.random() * 200);
  // }

  // for(let i = 0 ; i < 3; i++) {
  //   circleLeftCodX[i] =  Math.floor(Math.random() * 200);
  //   circleLeftCodY[i] = Math.floor(Math.random() * winY);
  //   circleRightCodX[i] = winX - Math.floor(Math.random() * 200);
  //   circleRightCodY[i] = Math.floor(Math.random() * winY);
  // }

  // for(let i = 0; i < 5; i++) {
  //   let circleTop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //   circleTop.setAttribute("cx", circleTopCodX[i]);
  //   circleTop.setAttribute("cy", circleTopCodY[i]);
  //   circleTop.setAttribute("r", 3 + "px");
  //   circleTop.setAttribute("fill", "#043b3b");
  //   circleTop.setAttribute("class",  "makeCircle");

  //   let circleBootm = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //   circleBootm.setAttribute("cx", circleBottomCodX[i]);
  //   circleBootm.setAttribute("cy", circleBottomCodY[i]);
  //   circleBootm.setAttribute("r", 3 + "px");
  //   circleBootm.setAttribute("fill", "#043b3b");
  //   circleBootm.setAttribute("class",  "makeCircle");

  //   circuit.appendChild(circleTop);
  //   circuit.appendChild(circleBootm);
  // }

  // for(let i = 0; i < 3; i++) {
  //   let circleLeft = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //   circleLeft.setAttribute("cx", circleLeftCodX[i]);
  //   circleLeft.setAttribute("cy", circleLeftCodY[i]);
  //   circleLeft.setAttribute("r", 3 + "px");
  //   circleLeft.setAttribute("fill", "#043b3b");
  //   circleLeft.setAttribute("class", "makeCircle");

  //   circuit.appendChild(circleLeft);

  //   let circleRight = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //   circleRight.setAttribute("cx", circleRightCodX[i]);
  //   circleRight.setAttribute("cy", circleRightCodY[i]);
  //   circleRight.setAttribute("r", 3 + "px");
  //   circleRight.setAttribute("fill", "#043b3b");
  //   circleRight.setAttribute("class", "makeCircle");

  //   circuit.appendChild(circleRight);
  // }


  // for(let i = 0 ; i < 5; i++ ) {
  //     let pathTop = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     let pathTopCopy = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     pathTop.setAttribute("d" , "M" + circleTopCodX[i] + " " + -40 + "V"  + circleTopCodY[i]);
  //     pathTopCopy.setAttribute("d" , "M" + circleTopCodX[i] + " " + -40 + "V"  + circleTopCodY[i]);
  //     pathTop.setAttribute("stroke", "#043b3b");
  //     pathTop.setAttribute("stroke-width", 1);
  //     pathTop.setAttribute("fill", "none");
  //     pathTop.setAttribute("class", "makePath");
  //     pathTopCopy.setAttribute("class", "makePathTopCopy");

    

  //     let pathBootm = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     let pathBootmCopy = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     pathBootm.setAttribute("d" , "M" + circleBottomCodX[i] + " " + circleBottomCodY[i] + "V"  +  winY + 40 );
  //     pathBootmCopy.setAttribute("d" , "M" + circleBottomCodX[i] + " " + circleBottomCodY[i] + "V"  +  winY + 40 );
  //     pathBootm.setAttribute("stroke", "#043b3b");
  //     pathBootm.setAttribute("stroke-width", 1);
  //     pathBootm.setAttribute("fill", "none");
  //     pathBootm.setAttribute("class", "makePath");
  //     pathBootmCopy.setAttribute("class", "makePathBootmCopy");


    
  //     circuit.appendChild(pathTop);
  //     circuit.appendChild(pathTopCopy);
  //     circuit.appendChild(pathBootm);
  //     circuit.appendChild(pathBootmCopy);
  // }

  // for(let i = 0 ; i < 3; i++ ) {
  //     let pathLeft = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     let pathLeftCopy = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     pathLeft.setAttribute("d" , "M" + -40 + " " + circleLeftCodY[i] + "H"  + circleLeftCodX[i]);
  //     pathLeftCopy.setAttribute("d" , "M" + -40 + " " + circleLeftCodY[i] + "H"  + circleLeftCodX[i]);
  //     pathLeft.setAttribute("stroke", "#043b3b");
  //     pathLeft.setAttribute("stroke-width", 1);
  //     pathLeft.setAttribute("fill", "none");
  //     pathLeft.setAttribute("class",  "makePath");
  //     pathLeftCopy.setAttribute("class",  "makePathLeftCopy");
    

  //     let pathRight = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     let pathRightCopy = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //     pathRight.setAttribute("d" , "M" + winX  + 30 + " " + circleRightCodY[i] + "H"  + circleRightCodX[i]);
  //     pathRightCopy.setAttribute("d" , "M" + winX  + 30 + " " + circleRightCodY[i] + "H"  + circleRightCodX[i]);
  //     pathRight.setAttribute("stroke", "#043b3b");
  //     pathRight.setAttribute("stroke-width", 1);
  //     pathRight.setAttribute("fill", "none");
  //     pathRight.setAttribute("class", "makePath");
  //     pathRightCopy.setAttribute("class", "makePathRightCopy");
    
  //     circuit.appendChild(pathLeft);
  //     circuit.appendChild(pathLeftCopy);
  //     circuit.appendChild(pathRight);
  //     circuit.appendChild(pathRightCopy);
  // }


  // for(let i = 1; i <= 8; i++) {
  //   let circuitCircle = document.getElementsByClassName("circle-ani-" + i)[0];
  //   getCircuitPosiX[i] = Math.floor(circuitCircle.getBoundingClientRect().x) + 7.4;
  //   getCircuitPosiY[i] = Math.floor(circuitCircle.getBoundingClientRect().y) + 8.4;

  //   let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //   circle.setAttribute("cx", getCircuitPosiX[i]);
  //   circle.setAttribute("cy", getCircuitPosiY[i]);
  //   circle.setAttribute("r", 5 + "px");
  //   circle.setAttribute("fill", "#043b3b");
  //   circle.setAttribute("class", "makeCircle");

  //   circuit.appendChild(circle);
    
  //   // let pathCircuit = document.createElementNS("http://www.w3.org/2000/svg", "path");
  //   // pathCircuit.setAttribute("d", "M" + (winX / 2 + i * 2) + " " + "0" + " " + "V" + 100);
  //   // pathCircuit.setAttribute("stroke", "red");
  //   // pathCircuit.setAttribute("stroke-width", "1px");
  //   // pathCircuit.setAttribute("fill", "none");

  //   // circuit.appendChild(pathCircuit);


  // }

  //console.log( getCircuitPosiX + getCircuitPosiY);

}



// randCircle();


// window.addEventListener("load", () => {
//   setTimeout(()=> {
//     let audio1 = new Audio(importaudio1);
//     let audio11 = new Audio(importaudio11);
//     audio1.play();
//     audio11.play();
//   } , 0);

//   setTimeout(()=> {
//     let audio2 = new Audio(importaudio5);
//     //let audio3 = new Audio();
//     let audio11 = new Audio(importaudio11);
//     let audio7 = new Audio(importaudio7);
//     audio2.play();
//     //audio3.play();
//     audio11.play();
//     audio7.play();
//   } , 1700);

  

//   let countPath = 0;

//   setTimeout(()=> {
//     let elemLogoPath = document.querySelectorAll(".logo-path-copy");
//     let elemPath = document.querySelectorAll(".makePathCopy");
//     let elemTopPath = document.querySelectorAll(".makePathTopCopy");
//     let elemTopBootm = document.querySelectorAll(".makePathBootmCopy");
//     let elemTopLeft = document.querySelectorAll(".makePathLeftCopy");
//     let elemTopRight = document.querySelectorAll(".makePathRightCopy");
//     let audio14 = new Audio(importaudio14);
//     let audio8 = new Audio(importaudio8);
//     let audio15 = new Audio(importaudio15);
//     let audio16 = new Audio(importaudio16);
//     console.log("is this working or not");
//     var x = setInterval(() => {
//       //  audio15.play();
//        audio16.play();
//     },800);

//     setTimeout(() => {
//       audio8.play()
//     }, 7000)
//     // countPath++;
//     audio14.playbackRate = 0.6;
//     audio14.play();
//     setTimeout(()=> {
//       // elemPath.style.animationName = "xyz" + countPath;
//       audio14.playbackRate = 1;
//       clearInterval(x);
//       elemLogoPath.forEach(
//         function(x) {
//           x.style.animation = "none";
//       });
//       elemPath.forEach(
//         function(x) {
//           // x.classList.remove("makePathCopy");
//           x.style.animation = "none";
//       });
//       elemTopPath.forEach(
//         function(x) {
//           // x.classList.remove("makePathTopCopy");
//           x.style.animation = "none";
//       });
//       elemTopRight.forEach(
//         function(x) {
//           x.style.animation = "none";
//           // x.classList.remove("makePathRightCopy");
//       });
//       elemTopBootm.forEach(
//         function(x) {
//           x.style.animation = "none";
//           // x.classList.remove("makePathBootmCopy");
//       });
//       elemTopLeft.forEach(
//         function(x) {
//           x.style.animation = "none";
//           // x.classList.remove("makePathLeftCopy");
//       });

//     }, 8300);
//   } , 3000);

  



// });

// document.getElementsByClassName("logo-text")[0].addEventListener("mouseenter", function() {
//   let elemText = document.querySelectorAll("[id^='logo-']");
//   let audio1 = new Audio(importaudio11);
//   audio1.play();
//   this.style.cursor = "pointer";

//   let x = 0;

//   elemText.forEach(
//     function(elem) {
//       if(elem.style.animationName  == "tZero") {
//         elem.style.animation = "tLogo 1s linear " + x + "s" + " forwards";
//         x = x + 0.05;
//       }
//       else {
//         elem.style.animation = "tZero 1s linear " + x + "s" + " forwards";
//         x = x + 0.05;
//       }      
//     }
//   );
//   x = 0;

// });


//console.log("this file is execution... coede... ");