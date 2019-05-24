import React from 'react';
import PropTypes from 'prop-types';

class Triangle extends React.Component {
    render() {
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio="none"
                viewBox='0 0 100 100'
                height={this.props.height}
                width={this.props.width}
            >
                <polygon
                    className={this.props.className}
                    fill={this.props.backgroundColor}
                    points={this.points()}
                    stroke={this.props.stroke}
                    stroke-width={this.props.strokeWidth}
                />
                {this.props.children}
            </svg>
        );
    }

    // Creates points depedent on triangle type
    points() {
        var coords = "";
        switch (this.props.type) {
            case "isosceles":
                coords = "50,0 0,100 100,100";
                break;
            case "right-angle":
                coords = "0,0 0,100 100,100";
                break;
            case "custom":
                coords = this.props.points;
                break;
        }
        return coords;
    }
}


Triangle.defaultProps = {
    className: "triangle",
    type: "isosceles",
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
    strokeWidth: "1px",
    points: "0,0 0,0 0,0",
}

Triangle.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(["isosceles","right-angle","custom"]),
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
    strokeWidth: PropTypes.string,
    points: PropTypes.string
}
export default Triangle;