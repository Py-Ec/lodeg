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
                <h2>ABOUT US</h2>
                <div className="about-us-container">
                    <div className="about-us-heading">
                        <h3>Welcome to <br /> coding heaven </h3>
                    </div>
                    <div className="about-us-content"> 
                        <p>Before we get ahead of ourselves, we Welcome You to CODERS LODGE. 
                        Coders Lodge is a community of passionate coders which helps them in many aspects, like we provide Chat Rooms for Coding Discussion where you can discuss about competitive programming as well as development and especially, we focus on international level coding competitions and hackathons. Coders Lodge is first ever website which provide a Project Partner Program (PPP) where you can find your dream partner for your projects as well as for Start-ups according to your skills and need. 
                        If you want to participate in any international/national Coding competitions then no need to worry, we at CODERS LODGE help you to build your talented team so that you can crack any coding competition.
                        </p>
                        <p > Mission: To facilitate enthusiastic learners with every possible service, so that they can learn practically and take a deep dive in the ocean of coding.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;