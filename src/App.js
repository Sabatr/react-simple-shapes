import React from 'react';
import ReactDom from 'react-dom';
import Test from './components/Test/Test'
/**
 * Component used to view the components
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <Test />
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('root'));