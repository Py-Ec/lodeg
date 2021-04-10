import React, { Component } from 'react';


class FormPPP extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    } 

    render() {
        return(
            <div className="services-form-container">
                <form>
                    <div className="form-container">
                        <h2>PROJECT PARTNER PROGRAM</h2>
                        <div onClick={this.props.status} className="close-ppp-form">
                            <span className="close">×</span>
                        </div>
                        <div className="form-content">
                            <div className="form-ppp-fname">
                                <div className="form-ppp-label">
                                    <label for="ppp-fname-input">First Name</label>
                                </div>
                                <div className="form-ppp-input">
                                    <input id="ppp-fname-input" name="ppp-fname" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-ppp-lname">
                                <div className="form-ppp-label">
                                    <label for="ppp-lname-input">Last Name</label>
                                </div>
                                <div className="form-ppp-input">
                                    <input id="ppp-lname-input" name="ppp-lname" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-ppp-email">
                                <div className="form-ppp-label">
                                    <label for="ppp-email-input">Email Id</label>
                                </div>
                                <div className="form-ppp-input">
                                    <input id="ppp-email-input" name="ppp-email" type="email" placeholder="Email Id" />
                                </div>
                            </div>
                            <div className="form-ppp-phone">
                                <div className="form-ppp-label">
                                    <label for="ppp-phone-input">Phone Number</label>
                                </div>
                                <div className="form-ppp-input">
                                    <input id="ppp-phone-input" name="ppp-phone" type="number" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-ppp-DOB">
                                <div className="form-ppp-label">
                                    <label for="ppp-DOB-input">Date Of Birth</label>
                                </div>
                                <div className="form-ppp-input">
                                    <input id="ppp-DOB-input" name="ppp-DOB" type="date" placeholder="Date Of Birth" />
                                </div>
                            </div>
                            
                        
                            <div className="form-ppp-country">
                                <div className="form-ppp-label">
                                    <label for="ppp-country-select">Country</label>
                                </div>
                                <div className="form-ppp-input"> {/* make a selection input */}
                                    <select id="ppp-country-select" name="ppp-country" class="ppp-country">
                                        <option value="none">--Country--</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-ppp-institution">
                                <div className="form-ppp-label">
                                    <label for="ppp-institution-select">Institution</label>
                                </div>
                                <div className="form-ppp-input"> {/* make a selection input */}
                                    <select id="ppp-institution-select" name="ppp-institution" class="ppp-institution">
                                        <option value="none">--Institution--</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-ppp-job-role">
                                <div className="form-ppp-label">
                                    <label for="ppp-job-role-input">Job Role</label>
                                </div>
                                <div className="form-ppp-input">
                                    <input id="ppp-job-role-input" name="ppp-job-role" type="date" placeholder="Job Role" />
                                </div>
                            </div>

                            <div className="form-ppp-project-type">
                                <div className="form-ppp-label">
                                    <label for="ppp-project-type-select">Project Type</label>
                                </div>
                                <div className="form-ppp-input"> {/* make a selection input */}
                                    <select id="ppp-project-type-select" name="ppp-project-type" class="ppp-institution">
                                        <option value="none">-- Project Type --</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-ppp-github-link">
                                <div className="form-ppp-label">
                                    <label for="ppp-github-link-input">Github Profile</label>
                                </div>
                                <div className="form-ppp-input"> 
                                    <input id="ppp-github-link-input" type="text" placeholder="Github Profile" />
                                </div>
                            </div>

                            <div className="form-ppp-linkedin-link">
                                <div className="form-ppp-label">
                                    <label for="ppp-linkedin-link-input">LinkedIn Profile</label>
                                </div>
                                <div className="form-ppp-input"> 
                                    <input id="ppp-linkedin-link-input" type="text" placeholder="LinkedIn Profile" />
                                </div>
                            </div>
                            <div className="form-ppp-submit">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormPPP;