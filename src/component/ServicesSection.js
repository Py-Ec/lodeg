import React, { Component } from "react";
import FormCCT from './FormCCT';
import FormPPP from './FormPPP';
import PPPImg from "../asset/image/PPP.png";
import CCTImg from "../asset/image/CCT1.png";


class ServiceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusCCT: false,
            statusPPP: false
        }
        this.renderFormCCT = this.renderFormCCT.bind(this)
        this.renderFormPPP = this.renderFormPPP.bind(this)
        this.toggleFormCCT = this.toggleFormCCT.bind(this)
        this.toggleFormPPP = this.toggleFormPPP.bind(this)
    }

    toggleFormCCT() {
        this.setState({
            statusCCT: !this.state.statusCCT,
        });
    }

    renderFormCCT() {
        if(this.state.statusCCT == true){
            return(
                <FormCCT status={() => this.toggleFormCCT()} />
            );
        }
        else {
            return(
                <>
                </>
            );
        }
    }
    toggleFormPPP() {
        this.setState({
            statusPPP: !this.state.statusPPP,
        });
    }

    renderFormPPP() {
        if(this.state.statusPPP == true){
            return(
                <FormPPP status={() => this.toggleFormPPP()} />
            );
        }
        else {
            return(
                <>
                </>
            );
        }
    }

    render() {



        return(
            <>
            <section id="services" className="services">
                <div className="services-container">
                    <h2>SERVICES</h2>
                    <div className="services-content">
                        <div className="service-CCT">
                            <div className="service-CCT-content">
                                <h3>CODING COMPETITION TEAM</h3>
                                <div className="cool-content">
                                <p>First demand of every platform for competitive coding is a perfect team. The services which we are going to provide under CCT are mentioned below:
                                    <ul>
                                        <li>Dedicated team members which will participate with you in different coding competitions as well as hackathons.</li>
                                        <li>The Team members which we are going to provide to you will be of same skill level so that you can learn and grow more together.</li>
                                        <li>Number of team members will be provided as per your demand.</li>
                                        <li>Get Updates about latest competitions and hackathons.</li>
                                    </ul>
                                   <strong> NOTE: Your team members can be from any corner of this world as we are going to make team on basis of common skills.</strong>
                                </p>
                                </div>
                                <form action="https://forms.gle/zQ4ACJyXxmbKS6so9" target="_blank">
                                <button type="submit"> REGISTER NOW</button>
                                </form>
                            </div>
                            <div className="service-CCT-image">
                                <img src={CCTImg} />
                            </div> 
                        </div>
                        <div className="service-PPP">
                            <div className="service-CCT-image">
                                <img src={PPPImg} />
                            </div> 
                            <div className="service-PPP-content">
                                <h3>PROJECT PARTNER PROGRAM</h3>
                                <div className="cool-content">
                                <p> <strong> Passionate learners strike with at least one idea per day and the only reason that they fail in implementing this idea, is the lack of perfect partner which is essential for every project.</strong>  <br /> Coders Lodge is going to select a project partner for you depending upon the theme or the type of idea which you have selected to work upon. To make sure that you get the perfect project partner we are going to match your skills and interest with the other person, so that you do not face any sort of problem in taking a mutual decision and your project become the next leading project in technical market. Moreover, if you feel that the allotted person is appropriate partner for you then you can work on more projects with the same person and even you both can mutually decide your next project.</p>
                                </div>
                                <form action="https://forms.gle/JZH6E9WsifzXb2V7A" target="_blank">
                                <button>REGISTER NOW</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <>
            {this.renderFormCCT()}
            {this.renderFormPPP()}
            </>
            </>
        );
    }
}


export default ServiceSection;