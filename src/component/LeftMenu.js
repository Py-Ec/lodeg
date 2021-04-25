import React, { Component } from "react";
import MenuItem from './shared/MenuItem';
import Social from './shared/Social';

class MenuLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        let winY = window.innerHeight;

        const NavItem = MenuItem.map((x) => {
            return(
                <a key={x.id} href={x.href} className={"nav-item-list"} title={x.title}>{x.item}</a>
            );
        });

        const icon = MenuItem.map((x) => {
            
            return(
                <a key={x.id} className={`nav-item-list icon-${x.item.toLocaleLowerCase()}`} href={x.href} title={x.title}>
                    <span className={x.icon}></span>
                </a>
            );
            

        });

        const social = Social.map((x) => {
            return(
                <a key={x.id} target="_blank" href={x.href} title={x.name} className={`social-icon icon-${x.name}`}></a>
            );
        })

        return(
            <nav id={"show-nav-item"}>
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
                            {social}
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


export default MenuLeft;

