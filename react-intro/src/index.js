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
    const inputType = 'Number';
    const minValue = 5;
    return <input type={inputType} min={minValue} />;
}

// 5) Show the component on the screen (pass in App as jsx element)
root.render(<App />);