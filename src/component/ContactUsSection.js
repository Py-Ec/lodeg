import React, { Component } from "react";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return(
            <section id="contact-us" className="contact-us">
                <h2>Contact Us</h2>
                <div className="contact-us-container">
                    <div className="contact-us-content">
                        <div className="contact-us-detail">
                            <ul className="contact-us-detail-list">
                                <li>Contact Number</li>
                                <li>Official email id</li>
                                <li>Official Address</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-us-content">
                        <div className="contact-us-form">
                            <form>
                                <div className="contact-form-container">
                                    <h3>Contact Us Form</h3>
                                    <div className="contact-form-content">
                                        <div className="contact-form-fname">
                                            <div className="contact-form-label">
                                                <label for="contact-fname">First Name</label>
                                            </div>
                                            <div className="contact-form-input">
                                                <input type="text" id="contact-fname" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="contact-form-lname">
                                            <div className="contact-form-label contact-form-label-lname">
                                                <label for="contact-lname">Last Name</label>
                                            </div>
                                            <div className="contact-form-input contact-form-input-lname">
                                                <input type="text" id="contact-lname" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="contact-form-email">
                                            <div className="contact-form-label contact-form-label-email">
                                                <label for="contact-email">Email Id</label>
                                            </div>
                                            <div className="contact-form-input contact-form-input-email">
                                                <input type="email" id="contact-email" placeholder="Email Id" />
                                            </div>
                                        </div>
                                        <div className="contact-form-phone">
                                            <div className="contact-form-label contact-form-label-phone">
                                                <label for="contact-form-phone">Phone No</label>
                                            </div>
                                            <div className="contact-form-input contact-form-input-phone">
                                                <input type="number" id="contact-form-phone" placeholder="Phone No (optional)"/>
                                            </div>
                                        </div>
                                        <div className="contact-form-message">
                                            <div className="contact-form-label contact-form-label-message">
                                                <label for="contact-form-message">Subject</label>
                                            </div>
                                            <div className="contact-form-input contact-form-input-message">
                                                <textarea id="contact-form-message" placeholder="Write something.." />
                                            </div>
                                        </div>
                                        <div className="contact-form-submit-btn">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;