import React, { Component } from 'react';
// import LogoImg from "../asset/image/codersLodge.svg";
// import LogoText from "../asset/image/codersLodge-name.svg";
import Logo from './shared/Logo';
import MenuItem from './shared/MenuItem';
import Social from './shared/Social';

// importing logo state 
import LogoOuter from './shared/Logo/LogoOuter';
import LogoPath from './shared/Logo/LogoPath';
import LogoCircle from './shared/Logo/LogoCircle';
import LogoTextZero from './shared/Logo/LogoTextZero';
import LogoText from './shared/Logo/LogoText';



class MenuTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status : false
        }

        this.menuFunction = this.menuFunction.bind(this);
    }


    menuFunction() {
        this.setState({
            status: !this.state.status,
        });
        const ShowLeftMenu = document.getElementById("show-nav-item");
        const mainContent = document.getElementsByClassName("main-container")[0];
        
        if(this.state.status) {
            ShowLeftMenu.classList.remove("show-nav-item");
            mainContent.style.gridTemplateColumns = "50px auto";
        }
        else {
            ShowLeftMenu.classList.add("show-nav-item");
            mainContent.style.gridTemplateColumns = "auto";
        }
    }

    CheckW1024() { // checking the width of the screen is 1024 or more...
        if(window.innerWidth >= 1024) {
            let elemsub = MenuItem.map((x) => {
                return(
                    <a key={x.id} title={x.title} href={x.href} className={"nav-item-list"} title={x.title}>{x.item}</a>
                );
            });
            let elem = <div className={"nav-item-btn"}><ul>{elemsub}</ul></div>
            return(elem)
        }
        else {
            return("");
        }
    }
   
    

    render() {

        const ViewBox = "0 5 400 75";
        const LogoZeroX = "80";
        const LogoZeroY = "50";
        const LogoTextX = "80";
        const LogoTextY = "50";

        

        const MenuStatus = this.state.status ? 'show-nav-item' : 'hide-nav-item';

        return(
            <nav className={`nav ${MenuStatus}`}>
                <div className={`menu-btn`} title={"Menu"} onClick={this.menuFunction}>
                        <div className={"menu-bar-1"}></div>
                        <div className={"menu-bar-2"}></div>
                        <div className={"menu-bar-3"}></div>
                </div>
                <div className="nav-content">
                    <div className={"nav-logo"} title={"Coders Lodge"}>
                        {/* <img className={"logo-img"} src={LogoImg} />
                        <img className={"logo-text"} src={LogoText} /> */}
                        <div className={"logo-img"}>
                            <Logo logoOuter={LogoOuter} logoPath={LogoPath} logoPoint={LogoCircle} logoTextZero={LogoTextZero} logoText={LogoText} viewBox={ViewBox} LogoZeroX={LogoTextX} LogoZeroY={LogoTextY} LogoTextX={LogoTextX} LogoTextY={LogoTextY}  />
                        </div>
                    </div>
                    <div>
                        {this.CheckW1024()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuTop;

