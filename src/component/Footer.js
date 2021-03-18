import  React,  { Component } from "react";

import Social from './shared/Social';


class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            social: Social
        }
    }

    render() {

        const Social = this.state.social.map((x) => {
            return(
                <a key={x.id} href={x.href} title={x.name} className={`social-icon icon-${x.name}`}></a>
            );
        })

        return(
            <footer className="footer">
                <div className="footer-container">
                    <div class="footer-siteName">
                        <h2>Coders Lodge</h2>
                    </div>
                    <div class="footer-product-link">
                        <div class="footer-product-list">
                            <h4><strong>Product</strong></h4>
                        </div>
                        <div class="footer-product-list">
                            <a href="#">Project Partner</a>
                        </div>
                        <div class="footer-product-list">
                            <a href="#">Coding Team</a>
                        </div>
                        <div class="footer-product-list">
                            <a href="#">Chat Room</a>
                        </div>
                        <div class="footer-product-list">
                            <a href="#">Discussion</a>
                        </div>
                    </div>
                    <div class="footer-Documentation-link">
                        <div class="footer-Documentation-list">
                            <h4><strong>Documentation</strong></h4>
                        </div>
                        <div class="footer-Documentation-list">
                            <a href="#">C language</a>
                        </div>
                        <div class="footer-Documentation-list">
                            <a href="#">C++</a>
                        </div>
                        <div class="footer-Documentation-list">
                            <a href="#">Java</a>
                        </div>
                        <div class="footer-Documentation-list">
                            <a href="#">Python</a>
                        </div>
                        <div class="footer-Documentation-list">
                            <a href="#">JavaScrip</a>
                        </div>
                    </div>
                    <div class="footer-support-link">
                        <div class="footer-support-list">
                            <h4><strong>Support</strong></h4>
                        </div>
                        <div class="footer-support-list">
                            <a href="#">Report Bugs</a>
                        </div>
                        <div class="footer-support-list">
                            <a href="#">Feedback</a>
                        </div>
                        <div class="footer-support-list">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="footer-last">
                    <div className="footer-social">
                        {Social}
                    </div>
                    <div className="footer-terms">
                        <div className="footer-terms-list">
                            <a href="#">&copy; 2021 Coders Lodge.</a>
                        </div>
                        <div className="footer-terms-list">
                            <a href="#">Terms</a>
                        </div>
                        <div className="footer-terms-list">
                            <a href="#">Privacy</a>
                        </div>
                        <div className="footer-terms-list">
                            <a href="#">About Us</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;