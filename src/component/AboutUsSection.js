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
                <h2>About Us</h2>
                <div className="about-us-container">
                    <div className="about-us-heading">
                        <h3>Coders Lodge is a Community of Coders </h3>
                    </div>
                    <div className="about-us-content"> 
                        <p>Before We Get Ahead of Ourselves, We Want to Welcome You To CODERS LODGE.
                        Coders Lodge is a Community of Coders which helps coders in many aspects, like we provide Chat Rooms for Coding Discussion where you can discuss the competitive programming and especially, we focus on international level coding competitions.
                        Coders Lodge is first ever website which provide a Project Partner Program (PPP) where you can find your dream partner for your projects as well as for Startups according to your skills and need.
                        If you want to participate in any international/national Coding competitions then no need to worry, we CODERS LODGE help you to build your talented team so that you can crack any coding competition.
                        </p>
                        <p > MISSION: We will help college students to provide each facility to learn practically and take a deep dive into a coding ocean</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;