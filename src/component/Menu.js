import React, { Component } from 'react';
import LogoImg from "../asset/image/codersLodge.svg";
import LogoText from "../asset/image/codersLodge-name.svg";
import Logo from './Logo';




class Menu extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            menuItem: [
                {
                    id: 0,
                    item: "HOME",
                    href: "#",
                    title: "Coders Lodge",
                    icon: "fas fa-home"
                },
                {
                    id: 1,
                    item: "SERVICES",
                    href: "#",
                    title: "Services",
                    icon: "fas fa-globe"
                },
                {
                    id: 2,
                    item: "CONTACT",
                    href: "#",
                    title: "Contact",
                    icon: "fas fa-envelope"
                },
                {
                    id: 3,
                    item: "ABOUT",
                    href: "#",
                    title: "About",
                    icon: "fas fa-address-card"
                },
                {
                    id: 4,
                    item: "PROFILE",
                    href: "#",
                    title: "Profile",
                    icon: "fas fa-user"
                }
            ],

            social: [
                {
                    id: 0,
                    name: "Facebook",
                    href: "#"
                },
                {
                    id: 1,
                    name: "Instagram",
                    href: "#"
                },
                {
                    id: 2,
                    name: "Twitter",
                    href: "#"
                },
                {
                    id: 3,
                    name: "Linkedin",
                    href: "#"
                }
            ],

            status : false
        }
        this.menuFunction = this.menuFunction.bind(this);
    }

    menuFunction() {
        this.setState({
            status: !this.state.status,
        });
    }

    CheckW1024() {
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
                    <img className={"logo-img"} src={LogoImg} />
                    <img className={"logo-text"} src={LogoText} />
                </div>
                <>
                    {this.CheckW1024()}
                </>
                <div className={`nav-item-icon`}>
                    <ul>
                        {icon}
                    </ul>
                </div>
                <div className={`nav-item`}>
                    <ul className={"nav-item-ul"}>
                        {NavItem}
                        <ul className={'nav-item-social'}>
                            {Social}
                        </ul>
                        <div className="copy-right">
                            <span>{<> &copy; 2020 Coders Lodge.</>}</span>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;

