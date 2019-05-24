import React from 'react';
import ReactDom from 'react-dom';
import Rectangle from './components/Shapes/Rectangle/Rectangle'
import Circle from './components/Shapes/Circle/Circle';
/**
 * Component used to view the components
 */
class App extends React.Component {
    render() {
        return (
            <div>  
                <Rectangle/>
                <Circle raduis="100" width="500"/>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('root'));