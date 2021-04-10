import React, { Component } from "react";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }

    render() {

        return(
            <section id="about-us" className="about-us">
                <div className="about-us-container">
                <div className="about-us-content">
                    <h3>CODERS LODGE</h3>
                    <p>Before We Get Ahead of Ourselves, We Want to Welcome You To CODERS LODGE.<br />
                       Coders Lodge is a Community of Coders which helps coders in many aspects, like we provide Chat Rooms for Coding Discussion where you can discuss the competitive programming and especially, we focus on international level coding competitions.<br />
                       Coders Lodge is first ever website which provide a Project Partner Program (PPP) where you can find your dream partner for your projects as well as for Startups according to your skills and need.<br />
                       If you want to participate in any international/national Coding competitions then no need to worry, we CODERS LODGE help you to build your talented team so that you can crack any coding competition.<br />
                       MISSION: We will help college students to provide each facility to learn practically and take a deep dive into a coding ocean<br />
                    </p>
                </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;