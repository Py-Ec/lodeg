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



class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            menuItem: MenuItem,
            social: Social,
            status : false,

            // logo state items
            logoOuter: LogoOuter,
            logoPath:  LogoPath,
            logoCircle : LogoCircle,
            logoTextZero : LogoTextZero,
            logoText : LogoText,
            viewBox: "0 5 400 75",
            LogoZeroX: "80",
            LogoZeroY: "50",
            LogoTextX: "80",
            LogoTextY: "50"
        }

        this.menuFunction = this.menuFunction.bind(this);
    }


    menuFunction() {
        this.setState({
            status: !this.state.status,
        });
    }

    CheckW1024() { // checking the width of the screen is 1024 or more...
        if(window.innerWidth >= 1024) {
            let elemsub = this.state.menuItem.map((x) => {
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

        const NavItem = this.state.menuItem.map((x) => {
            return(
                <a key={x.id} href={x.href} className={"nav-item-list"} title={x.title}>{x.item}</a>
            );
        });

        const icon = this.state.menuItem.map((x) => {
            
            return(
                <a key={x.id} className={`nav-item-list icon-${x.item.toLocaleLowerCase()}`} href={x.href} title={x.title}>
                    <span className={x.icon}></span>
                </a>
            );
            

        });

        const Social = this.state.social.map((x) => {
            return(
                <a key={x.id} href={x.href} title={x.name} className={`social-icon icon-${x.name}`}></a>
            );
        })

        const MenuStatus = this.state.status ? 'show-nav-item' : 'hide-nav-item';

        return(
            <nav className={`nav ${MenuStatus}`}>
                <div className={`menu-btn`} title={"Menu"} onClick={this.menuFunction}>
                        <div className={"menu-bar-1"}></div>
                        <div className={"menu-bar-2"}></div>
                        <div className={"menu-bar-3"}></div>
                </div>
                <div className={"nav-logo"} title={"Coders Lodge"}>
                    {/* <img className={"logo-img"} src={LogoImg} />
                    <img className={"logo-text"} src={LogoText} /> */}
                    <div className={"logo-img"}>
                        <Logo logoOuter={this.state.logoOuter} logoPath={this.state.logoPath} logoPoint={this.state.logoCircle} logoTextZero={this.state.logoTextZero} logoText={this.state.logoText} viewBox={this.state.viewBox} LogoZeroX={this.state.LogoTextX} LogoZeroY={this.state.LogoTextY} LogoTextX={this.state.LogoTextX} LogoTextY={this.state.LogoTextY}  />
                    </div>
                </div>
                <>
                    {this.CheckW1024()}
                </>
                <div className={`nav-item-icon`}>
                    <ul>
                        {icon}
                    </ul>
                </div>
                <div className={"nav-item"}>
                    <div className={"nav-item-list-menu"}>
                        <ul className={"nav-item-ul"}>
                            {NavItem}
                        </ul>
                    </div>
                    <div className={"nav-item-list-social"}>
                        <ul className={'nav-item-social'}>
                            {Social}
                        </ul>
                        <div className="copy-right">
                            <span>{<> &copy; 2020 Coders Lodge.</>}</span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;

