import React from 'react';
import ReactDom from 'react-dom';
import Rectangle from './components/Shapes/Rectangle/Rectangle'
/**
 * Component used to view the components
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <Rectangle />
                <Rectangle width="100" height="100" backgroundColor="rgb(0,0,255)"/>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('root'));