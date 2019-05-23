import React from 'react';
import PropTypes from 'prop-types';

/**
 * React component for rectangles
 */
class Rectangle extends React.Component {
    render() {
        return (
            <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 45 45'
                height={this.props.height}
                width={this.props.width}
                x="100px"
                y="100px"
                preserveAspectRatio="none">
                <rect x='0' y='0'
                    className="rectangle"
                    width='45'
                    height='45'
                    fill={this.props.backgroundColor}
                    stroke={this.props.stroke}/>
                {this.props.children}
            </svg>
        );
    }
}

Rectangle.defaultProps = {
    height: 300,
    width: 300,
    backgroundColor: "rgb(0,255,255)",
    stroke: "none"
}
Rectangle.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    stroke: PropTypes.string
}

export default Rectangle;