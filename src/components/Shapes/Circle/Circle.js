import React from 'react';
import PropTypes from 'prop-types';
class Circle extends React.Component {
    render() {
        return ( 
            <svg xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 45 45'
            height={this.props.height}
            width={this.props.width}
            preserveAspectRatio="none"
            transform={`translate(${this.props.x} ${this.props.y}) 
            rotate(${this.props.rotate}) 
            scale(${this.props.scaleX} ${this.props.scaleY}) 
            skewX(${this.props.skewX})
            skewY(${this.props.skewY})`}>
            <circle cx='22.25' cy='22.25'
                r={this.props.radius}
                className={this.props.className}
                width='45'
                height='45'
                fill={this.props.backgroundColor}
                stroke={this.props.stroke}/>
            {this.props.children}
        </svg>
        )
    }
}

Circle.defaultProps = {
    className:"circle",
    height: 300,
    width: 300,
    backgroundColor: "rgb(0,255,255)",
    stroke: "none",
    x: 0,
    y: 0,
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    radius: 22.25
}

Circle.propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    stroke: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    rotate: PropTypes.number,
    scaleX: PropTypes.number,
    scaleY: PropTypes.number,
    skewX: PropTypes.number,
    skewY: PropTypes.number,
    radius: PropTypes.number
}

export default Circle;