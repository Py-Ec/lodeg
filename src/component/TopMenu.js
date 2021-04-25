import React, { Component } from 'react';
// import LogoImg from "../asset/image/codersLodge.svg";
import LogoText from "../asset/image/codersLodge-name.svg";
// import Logo from './shared/Logo';
import MenuItem from './shared/MenuItem';




class MenuTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status : false
        }

        
    }


    render() {



        let elemSub = MenuItem.map((x) => {
            return(
                <a key={x.id}  title={x.title} href={x.href} className={"nav-item-list"} title={x.title}>{x.item}</a>
            );
        });

        return(
            
            <nav className="nav">
                <div className={`menu-btn`} title="Menu" onClick={() => this.props.menuFunction()}>
                        <div className="menu-bar-1"></div>
                        <div className="menu-bar-2"></div>
                        <div className="menu-bar-3"></div>
                </div>
                <div className="nav-content">
                    <div className="nav-logo" title="Coders Lodge">
                        {/* <img className={"logo-img"} src={LogoImg} /> */}
                        <img className="logo-text" src={LogoText} /> 
                        {/* <Logo passClassName="logo-text" logoImgView={false} logoTextView={true} logoOuter={this.props.logoOuter} logoPath={this.props.logoPath} logoPoint={this.props.logoCircle} logoTextZero={this.props.logoTextZero} logoText={this.props.logoText} viewBox={this.props.viewBox} LogoZeroX={this.props.logoTextX} LogoZeroY={this.props.logoTextY} LogoTextX={this.props.logoTextX} LogoTextY={this.props.logoTextY}  /> */}
                    </div>
                    <div className="nav-item-btn">
                        <ul>{elemSub}</ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuTop;

