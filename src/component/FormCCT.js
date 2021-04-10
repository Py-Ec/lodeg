import React, { Component } from 'react';


class FormCCT extends Component {
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
                        <h2>CODING COMPETITION TEAM</h2>
                        <div  onClick={this.props.status} className="close-cct-form">
                            <span className="close">×</span>
                        </div>
                        <div className="form-content">
                            <div className="form-cct-fname">
                                <div className="form-cct-label">
                                    <label for="cct-fname-input">First Name</label>
                                </div>
                                <div className="form-cct-input">
                                    <input id="cct-fname-input" name="cct-fname" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-cct-lname">
                                <div className="form-cct-label">
                                    <label for="cct-lname-input">Last Name</label>
                                </div>
                                <div className="form-cct-input">
                                    <input id="cct-lname-input" name="cct-lname" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-cct-email">
                                <div className="form-cct-label">
                                    <label for="cct-email-input">Email Id</label>
                                </div>
                                <div className="form-cct-input">
                                    <input id="cct-email-input" name="cct-email" type="email" placeholder="Email Id" />
                                </div>
                            </div>
                            <div className="form-cct-phone">
                                <div className="form-cct-label">
                                    <label for="cct-phone-input">Phone Number</label>
                                </div>
                                <div className="form-cct-input">
                                    <input id="cct-phone-input" name="cct-phone" type="number" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-cct-DOB">
                                <div className="form-cct-label">
                                    <label for="cct-DOB-input">Date Of Birth</label>
                                </div>
                                <div className="form-cct-input">
                                    <input id="cct-DOB-input" name="cct-DOB" type="date" placeholder="Date Of Birth" />
                                </div>
                            </div>
                            
                        
                            <div className="form-cct-country">
                                <div className="form-cct-label">
                                    <label for="cct-country-select">Country</label>
                                </div>
                                <div className="form-cct-input"> {/* make a selection input */}
                                    <select id="cct-country-select" name="cct-country" class="cct-country">
                                        <option value="none">--Country--</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-cct-institution">
                                <div className="form-cct-label">
                                    <label for="cct-institution-select">Institution</label>
                                </div>
                                <div className="form-cct-input"> {/* make a selection input */}
                                    <select id="cct-institution-select" name="cct-institution" class="cct-institution">
                                        <option value="none">--Institution--</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-cct-no-of-team">
                                <div className="form-cct-label">
                                    <label for="cct-no-of-team-input">Number of Team</label>
                                </div>
                                <div className="form-cct-input"> {/* make a selection input */}
                                    <input id="cct-no-of-team-input" name="cct-no-of-team" type="number" placeholder="Number of Team" />
                                </div>
                            </div>
                            <div className="form-cct-coding-lang">
                                <div className="form-cct-label">
                                    <label for="cct-coding-lang-input">PROGRAMMING LANGUAGE</label>
                                </div>
                                <div className="form-cct-input"> {/* make a selection input */}
                                    <input id="cct-coding-lang-input" type="text" placeholder="PROGRAMMING LANGUAGE" />
                                </div>
                            </div>
                            <div className="form-cct-your-level">
                                <div className="form-cct-label">
                                    <label for="cct-your-level-input">Your Level</label>
                                </div>
                                <div className="form-cct-input"> 
                                <select id="cct-your-level-select" name="cct-your-level" class="cct-your-level">
                                        <option value="none">-- YOUR LEVEL --</option>
                                        <option value="beginner">-- BEGINNER --</option>
                                        <option value="intermediate">-- INTERMEDIATE --</option>
                                        <option value="expert">-- EXPERT --</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-cct-GFG-link">
                                <div className="form-cct-label">
                                    <label for="cct-GFG-link-input">GeeksForGeeks Profile</label>
                                </div>
                                <div className="form-cct-input"> 
                                    <input id="cct-GFG-link-input" type="text" placeholder="GeeksForGeeks Profile" />
                                </div>
                            </div>
                            <div className="form-cct-github-link">
                                <div className="form-cct-label">
                                    <label for="cct-github-link-input">Github Profile</label>
                                </div>
                                <div className="form-cct-input"> 
                                    <input id="cct-github-link-input" type="text" placeholder="Github Profile" />
                                </div>
                            </div>
                            <div className="form-cct-hackerrank-link">
                                <div className="form-cct-label">
                                    <label for="cct-hackerrank-link-input">HackerRank Profile</label>
                                </div>
                                <div className="form-cct-input"> 
                                    <input id="cct-hackerrank-link-input" type="text" placeholder="HackerRank Profile" />
                                </div>
                            </div>
                            <div className="form-cct-codechef-link">
                                <div className="form-cct-label">
                                    <label for="cct-codechef-link-input">CodeChef Profile</label>
                                </div>
                                <div className="form-cct-input"> 
                                    <input id="cct-codechef-link-input" type="text" placeholder="CodeChef Profile" />
                                </div>
                            </div>
                            <div className="form-cct-submit">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormCCT;