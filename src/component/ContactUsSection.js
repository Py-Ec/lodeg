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
                <div className="contact-us-container">
                    <div className="contact-us-detail">
                        <h3>Contact Info</h3>
                        <div className="contact-us-detail-container">
                            <ul className="contact-us-detail-list">
                                <li><i class="fas fa-phone-volume"></i> <span>+91 9525033842</span></li>
                                <li><i class="fas fa-envelope"></i> <span>info@coderslodge.com</span></li>
                                <li><i class="fas fa-map-marker-alt"></i> <span>2912 MeadowBrook Road Los Angeles, CA 90017</span></li>
                            </ul>
                            <ul className="contact-us-social">
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                                <li><i class="fab fa-telegram"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="contact-us-form">
                        <form>
                            <div className="contact-form-container">
                                <h3>Send A Message</h3>
                                <div className="contact-form-content">
                                    <div id="contact-form-fname" className="contact-form-input">
                                        <input type="text" id="contact-fname" required/>
                                        <label for="contact-fname">First Name</label>
                                    </div>
                                    <div id="contact-form-lname" className="contact-form-input">
                                        <input type="text" id="contact-lname"  required/>
                                        <label for="contact-lname">Last Name</label>
                                    </div>
                                    <div id="contact-form-email" className="contact-form-input">
                                        <input type="email" id="contact-email"  required/>
                                        <label for="contact-email">Email Id</label>
                                    </div>
                                    <div id="contact-form-phone" className="contact-form-input">
                                        <input type="number" id="contact-form-phone" required/>
                                        <label for="contact-form-phone">Phone No (optional)</label>
                                    </div>
                                    <div id="contact-form-message" className="contact-form-input">
                                        <textarea id="contact-form-message" required />
                                        <label for="contact-form-message">Write something..</label>
                                    </div>
                                    <div className="contact-form-submit-btn" >
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;