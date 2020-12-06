// Import React and ReactDOM

import React from 'react';
import ReactDOM from 'react-dom';
//// could be: const React = require('react');
//// could be: const ReactDOM = require('react-dom');

function getButtonText(){
    return 'Click on me!'
}//// could be: const buttonText = 'Click me!' then pass the variable inside the button tag.

// Create a react component
const App = () => {

    return (
        <div>
            <label className='label' for='name'>Enter name: </label>
            <input id='name' type='text' />
    <button style={{ backgroundColor:'blue',color:'white' }}>{getButtonText()}</button>
        </div>
    )
};

//// could be: const App = function(){return <div>Hi there!</div>}

// Take the react component and shot it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);


