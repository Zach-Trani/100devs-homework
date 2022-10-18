// Creating a React component and showing it on screen

// 1) Import the React and ReactDOM libaries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root (el short for element)
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component (a function that computes some code and returns some JSX)
function App() {
    return <input style={{ border: '1px solid blue' }} />;
}

// 5) Show the component on the screen (pass in App as jsx element)
root.render(<App />);


// Practice JSX Conversion
// Remember the five rules of converting HTML to JSX.

// Rule 1) All prop names follow camelCase capitalization

// Rule 2) Number attributes use curly braces

// Rule 3) Booleans of 'true' can be written with just the property name

// Rule 4) The 'class' attribute is written as 'className'

// Rule 5)In-line styles are provided as objects

