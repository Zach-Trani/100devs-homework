// Creating a componenet and showing it on screen

// 1) Import the React and ReactDOM libaries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root (el short for element)
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component (a function that returns some jsx)
function App(){
    return <h1>Hello World!</h1>;
}

// 5) Show the component on the screen (pass in App as jsx element)
root.render(<App />);