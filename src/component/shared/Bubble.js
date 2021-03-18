import React, { Component } from "react";


class Bubble extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        function createBubble() {
            const bubble = document.getElementById("bubble");
            const createElem = document.createElement('div');

            const icon =["html","css", "js", "node-js", "jqery" , 'react', 'php', 'angular', "c", 'c-push' , "c-hash", 'python', 'java', "swift"];
        
            const index = Math.floor(Math.random() * icon.length);

            var size = 20 + Math.random() * 60;



            createElem.style.width = size + 'px';
            createElem.style.height = size + 'px';
            createElem.style.left = Math.random() * window.innerWidth -10  + 'px';
            createElem.setAttribute("class", icon[index]);

            bubble.appendChild(createElem);
    
            setTimeout(()=> {
                createElem.remove();
            }, 4000);
        }
    
        setInterval(createBubble,300);

    }

    

    render() {

        return(
            <div id={"bubble"}>
            </div>
        ); 
    }
}

export default Bubble;