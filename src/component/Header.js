import  React,  { Component } from "react";
import Logo from './shared/Logo';
import TopMenu from './TopMenu';


import LogoOuter from './shared/Logo/LogoOuter';
import LogoPath from './shared/Logo/LogoPath';
import LogoCircle from './shared/Logo/LogoCircle';
import LogoTextZero from './shared/Logo/LogoTextZero';
import LogoText from './shared/Logo/LogoText';



class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render() {

        const ViewBox = "0 0 100 80";
        const LogoZeroX = "80";
        const LogoZeroY = "50";
        const LogoTextX = "80";
        const LogoTextY = "50";


        return(
            <header className="header" >
                <TopMenu status={this.props.Status} menuFunction={this.props.MenuFunction} logoOuter={LogoOuter} logoPath={LogoPath} logoCircle={LogoCircle} logoTextZero={LogoTextZero} logoText={LogoText} viewBox={ViewBox} logoZeroX={LogoZeroX} logoZeroY={LogoZeroY} logoTextX={LogoTextX} logoTextY={LogoTextY} />
                <div className="header-container">
                    <div className="header-content">
                        <div className="header-content-img">
                            <Logo passClassName="logo-svg" logoImgView={true} logoTextView={false} logoOuter={LogoOuter} logoPath={LogoPath} logoPoint={LogoCircle} logoTextZero={LogoTextZero} logoText={LogoText} viewBox={ViewBox} LogoZeroX={LogoTextX} LogoZeroY={LogoTextY} LogoTextX={LogoTextX} LogoTextY={LogoTextY}  />
                        </div>
                        <div className="header-content-sub">
                            <h3> Dream |<span> Think </span>| Code </h3>
                            
                            <p>Coders Lodge is a Community of Coders</p>

                            <form onSubmit={() => alert("Thank You")}>
                                <input type="email" name="email" id="sub-email" placeholder="Email" required />
                                <button type="submit">SUBSCRIBE</button>
                            </form>
                        </div> 
                    </div>
                </div>
            </header>
        );
    }
}



export default HeaderComponent;