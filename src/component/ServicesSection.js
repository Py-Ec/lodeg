import React, { Component } from "react";
import FormCCT from './FormCCT';
import FormPPP from './FormPPP';


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
            
            <section id="services" className="services">
                <div className="services-container">
                    <h2>Services</h2>
                    <div className="services-content">
                        <div className="service-CCT">
                            <h3>CODING COMPETITION TEAM</h3>
                            <p>We will find you a team member for international coding competitions and hackathons like Google Hash code, code Jam, ICPC and many others. We will match your skill with others and then we will create a best team for you so that you can crack any competitions. We always update you for latest competitions to your mail.Your team members can be from anywhere in the world because we choose members according to skills.</p>
                            <button onClick={() => this.toggleFormCCT() }>REGISTER NOW</button>
                        </div>
                        <div className="service-PPP">
                            <h3>PROJECT PARTNER PROGRAM</h3>
                            <p>If you are looking for a team which help you in project, then no need to go anywhere we coders lodge will find a project partner for you.</p>
                            <button onClick={() => this.toggleFormPPP() }>REGISTER NOW</button>
                        </div>
                    </div>
                </div>
                    {this.renderFormCCT()}
                    {this.renderFormPPP()}
            </section>
           
        );
    }
}


export default ServiceSection;