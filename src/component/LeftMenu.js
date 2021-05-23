import React, { Component } from "react";


class MenuLeft extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const NavItem = this.props.menuItem.map((x) => {
            return(
                <a key={x.id} href={x.href} className={"nav-item-list"} title={x.title}>{x.item}</a>
            );
        });

        const icon = this.props.menuItem.map((x) => {
            
            return(
                <a key={x.id} className={`nav-item-list icon-${x.item.toLocaleLowerCase()}`} href={x.href} title={x.title}>
                    <span className={x.icon}></span>
                </a>
            );
            

        });

        const Social = this.props.social.map((x) => {
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


export default MenuLeft;

