import React from 'react';
import ReactDom from 'react-dom';
import {Test} from './components/Test/Test'
/**
 * Component used to view the components
 */
const components = () => {
    return (
        <div>
            <Test/>
        </div>
    )
}

ReactDom.render(<this.components/>,document.getElementById('root'));