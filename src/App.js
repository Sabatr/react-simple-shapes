import React from 'react';
import ReactDom from 'react-dom';
import Rectangle from './components/Shapes/Rectangle/Rectangle'
import Circle from './components/Shapes/Circle/Circle';
import Triangle from './components/Shapes/Triangle/Triangle'
/**
 * Component used to view the components
 */
class App extends React.Component {
    render() {
        return (
            <div>  
                <Triangle stroke="black" stroke-width="1px" type="right-angle"/>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('root'));