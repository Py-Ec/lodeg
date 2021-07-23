import  React,  { Component } from "react";


class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const Social = this.props.social.map((x) => {
            return(
                <a key={x.id} target="_blank" href={x.href} title={x.name} className={`social-icon icon-${x.name}`}></a>
            );
        })

        return(
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-siteName">
                        <h2>Coders Lodge</h2>
                    </div>
                    <div className="footer-product-link">
                        <div className="footer-product-list">
                            <h4><strong>Product</strong></h4>
                        </div>
                        <div className="footer-product-list">
                            <a href="#">Project Partner</a>
                        </div>
                        <div className="footer-product-list">
                            <a href="#">Coding Team</a>
                        </div>
                        <div className="footer-product-list">
                            <a href="#">Chat Room</a>
                        </div>
                        <div className="footer-product-list">
                            <a href="#">Discussion</a>
                        </div>
                    </div>
                    {/* <div className="footer-Documentation-link">
                        <div className="footer-Documentation-list">
                            <h4><strong>Documentation</strong></h4>
                        </div>
                        <div className="footer-Documentation-list">
                            <a href="#">C language</a>
                        </div>
                        <div className="footer-Documentation-list">
                            <a href="#">C++</a>
                        </div>
                        <div className="footer-Documentation-list">
                            <a href="#">Java</a>
                        </div>
                        <div className="footer-Documentation-list">
                            <a href="#">Python</a>
                        </div>
                        <div className="footer-Documentation-list">
                            <a href="#">JavaScrip</a>
                        </div>
                    </div> */}
                    <div className="footer-support-link">
                        <div className="footer-support-list">
                            <h4><strong>Support</strong></h4>
                        </div>
                        <div className="footer-support-list">
                            <a href="#">Report Bugs</a>
                        </div>
                        <div className="footer-support-list">
                            <a href="#">Feedback</a>
                        </div>
                        <div className="footer-support-list">
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