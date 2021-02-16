import React , { Component } from "react";

class Points extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            winX: window.innerWidth, // width of the screen window
            winY: window.innerHeight, // height of the screen window
            pointX: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)],
            pointY: [Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight),Math.floor(Math.random() * window.innerHeight)].sort((a,b) => a - b ),
            moveX: []
        }
    }

    componentDidMount () { // after rendered the component adding the event on resize 
        let pathD = []; // hold the d attribute of path tag
        let getCircleCodElem = document.querySelectorAll(".getCod"); // selecting the circle tag 
        let pathCodElem = document.querySelectorAll(".getPathCod"); // selecting the path tag 
        let pathCodElemCopy = document.querySelectorAll(".getPathCodCopy"); // selecting the path tag copy
        let percentCodX = []; // this array hold the path location in percentage of x coordinate 
        let percentCodY = []; // this array hold the path location in percentage of y coordinat
        let percentMoveX = []; // this array hold the path location in percentage in the middle portions 

        getCircleCodElem.forEach((x,y) => { // calculate the path d attribute in percentage 
            percentCodX[y] = (this.state.pointX[y] / this.state.winX) * 100; // simple %age formulaa applyed
            percentCodY[y] = (this.state.pointY[y] / this.state.winY) * 100; // simple %age formulaa applyed
        })

        this.state.moveX.forEach((x,y) => {
            percentMoveX[y] = (x / this.state.winX) * 100; // simple %age formula applyed
        })
  
        window.addEventListener("resize", () => { // applying the onResize event so that every point of circle and path show the responsive 
            let i=0,j=1;
            getCircleCodElem.forEach((x,y) => { // applying the new coordinate for circle tag
                x.style.cx = (percentCodX[y] * window.innerWidth) / 100; // simple %age formulaa applyed
                x.style.cy = (percentCodY[y] * window.innerHeight) / 100; // simple %age formulaa applyed
            });

            pathCodElem.forEach((x,y) => {  // applying the new coordinate for path tag 

                if(y%2 == 0) { //selecting the alternate index 
                    pathD[y] = `M${(percentCodX[i] * window.innerWidth) / 100} ${(percentCodY[i] * window.innerHeight) / 100} H${(percentMoveX[y] * window.innerWidth) / 100} L${(percentMoveX[y] * window.innerWidth) / 100 + Math.abs(this.state.pointY[i] - this.state.pointY[j])} ${(percentCodY[j] * window.innerHeight) / 100} L${(percentCodX[j] * window.innerWidth) / 100} ${(percentCodY[j] * window.innerHeight) / 100}`;                
                }
                
                else {
                    pathD[y] = `M${(percentCodX[i] * window.innerWidth) / 100 } ${(percentCodY[i] * window.innerHeight) / 100} H${(percentMoveX[y] * window.innerWidth) / 100} L${(percentMoveX[y] * window.innerWidth) / 100 - Math.abs(this.state.pointY[i] - this.state.pointY[j])} ${(percentCodY[j] * window.innerHeight) / 100} L${(percentCodX[j] * window.innerWidth) / 100} ${(percentCodY[j] * window.innerHeight) / 100}`;
                }

                x.removeAttribute("d"); // removing the default d attribute of path tag
                pathCodElemCopy[y].removeAttribute("d"); // removing the default d attribute of path copy tag

                x.style.d = `path("${pathD[y]}")`; // applying the new d attribute of path tag
                pathCodElemCopy[y].style.d = `path("${pathD[y]}")`; // applying the new d attribute of path copy tag

                i = i + 2; // increment so that we get the paired index for ex 0,1 2,3 4,5 and so on... 
                j = j + 2;
            })
        })
    }


    render() {
        let i=0,j=1;
        let pathD;
        const color0 = "#5A6351"; 

        const point = this.state.pointX.map((x,y) => {

            if(i < this.state.pointX.length - 1) {
                if(x < this.state.pointX[j]) {
                    this.state.moveX[y] = this.state.pointX[i] + Math.random() * Math.abs((this.state.pointX[i] - this.state.pointX[j]) );
                    pathD = `M${this.state.pointX[i]} ${this.state.pointY[i]} H${this.state.moveX[y]} L${this.state.moveX[y] + Math.abs(this.state.pointY[i] - this.state.pointY[j])} ${this.state.pointY[j]} L${this.state.pointX[j]} ${this.state.pointY[j]}`;                
                    
                }
                
                else {
                    this.state.moveX[y] = this.state.pointX[i] - Math.random() * Math.abs((this.state.pointX[i] - this.state.pointX[j]));
                    pathD = `M${this.state.pointX[i]} ${this.state.pointY[i]} H${this.state.moveX[y]} L${this.state.moveX[y] - Math.abs(this.state.pointY[i] - this.state.pointY[j])} ${this.state.pointY[j]} L${this.state.pointX[j]} ${this.state.pointY[j]}`;
                }

                i = i + 2;
                j = j + 2;


                return(
                    <g key={y}>
                        <path className={"makePath getPathCod"} d={pathD} stroke={color0} fill={"none"} strokeWidth={1}/>
                        <path className={"makePathCopy getPathCodCopy"} d={pathD} stroke={color0} fill={"none"} strokeWidth={1}/>
                        <circle className={"makeCircle getCod"} cx={this.state.pointX[i-2]} cy={this.state.pointY[i-2]} r={3 + "px"} fill={color0}/>
                        <circle className={"makeCircle getCod"} cx={this.state.pointX[j-2]} cy={this.state.pointY[j-2]} r={3 + "px"} fill={"red"}/>
                    </g>
                );
            }
        })


        return(
            <>
                {point}
            </>
        );
    }

}

export default Points;