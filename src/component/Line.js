import React, {Component} from "react";

class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winX: window.innerWidth,
            winY: window.innerHeight,
            line: [0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720,740,760,780,800,820,840,860,880,900,920,940,960,980,1000,1020,1040,1060,1080,1100,1120,1140,1160,1180,1200,1220,1240,1260,1280,1300,1320,1340,1360,1380,1400,1420,1440,1460,1480,1500,1520,1540,1560,1580,1600,1620,1640,1660,1680,1700,1720,1740,1760,1780,1800,1820,1840,1860,1880,1900,1920,1940,1960,1980,2000],
            pointX: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)],
            pointY: [Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth),Math.floor(Math.random() * window.innerWidth)].sort((a,b) => a - b )
        }
    }

    render() {
        const color6 = "#0ed4e3";

        // onresize event it stating re-reander the line Component 
        var clear;
        window.addEventListener("resize", () => {
            clearTimeout(clear);
            clear = setTimeout(()=> {
                this.setState({
                    winX: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    winY: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                });
            }, 100);
        });

        //geting the coordinate for line 'lineX' and 'lineY' and push into the array

        const LINE = this.state.line.map((x,y) => {
            if(this.state.winX > this.state.winY) {
                if(x<this.state.winX) {
                    if(x<this.state.winY) {
                        return(
                            <g key={y}>
                                <path  className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + x + " " + 0 + "L" + x + " " + this.state.winY} />
                                <path  className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + 0 + " " + x + "L" + this.state.winX + " " + x} />
                            </g>
                        );
                    }
                    else {
                        return(
                            <path key={y} className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + x + " " + 0 + "L" + x + " " + this.state.winY} />
                        );
                    }
                }
            }
            else {
                if(x<this.state.winY) {
                    if(x<this.state.winX) {
                        return(
                            <g key={y}>
                                <path  className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + x + " " + 0 + "L" + x + " " + this.state.winY} />
                                <path  className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + 0 + " " + x + "L" + this.state.winX + " " + x} />
                            </g>
                        );
                    }
                    else {
                        return(
                            <path  className={ "line" + Math.floor(Math.random() * 10) } fill={"none"} stroke={color6} strokeWidth={0.5} strokeOpacity={0.1} d={"M" + 0 + " " + x + "L" + this.state.winX + " " + x} />
                        );
                    }
                }
            }
        })

        return(
            <g>
                {LINE}
            </g>
        );
    }

} 

export default Line;