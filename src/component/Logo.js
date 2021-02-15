import React, { Component } from "react";

class Logo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const LogoOuter = this.props.logoOuter.map((x) => {
            return(
                <path key={x.id} className={x.class} d={x.d} stroke={x.stroke} strokeWidth={x.strokeWidth} fill={x.fill} />
            );
        });

        const LogoPath = this.props.logoPath.map((x) => {
            return(
                <g key={x.id}>
                    <path className={x.class} d={x.d} strokeWidth={x.strokeWidth} fill={x.fill} stroke={x.stroke} strokeLinecap={x.strokeLinecap} opacity={x.opacity} />
                    <path className={`${x.class}-copy`} d={x.d} strokeWidth={x.strokeWidth} fill={x.fill} stroke={x.stroke} strokeLinecap={x.strokeLinecap} opacity={x.opacity} />
                </g>
            );
        });

        const LogoCircle = this.props.logoPoint.map((x) => {
            return(
                <circle key={x.id} className={x.class} cx={x.cx} cy={x.cy} r={x.r} strokeWidth={x.strokeWidth} fill={x.fill} stroke={x.stroke} opacity={x.opacity} />
            );
        });

        return(
          <g>
              {LogoOuter}
              {LogoPath}
              {LogoCircle}
          </g>
        );
    }

}

export default Logo;

