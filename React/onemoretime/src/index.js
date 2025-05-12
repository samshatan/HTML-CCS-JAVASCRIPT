import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// DOM:- Document object model

// const h1ele = React.createElement('h1', {}, "Hello i am from react");
// const h1el = <h1>Hello i m from via jsx</h1>;

// console.log("Via react", h1ele);
// console.log(h1el);

root.render(
    <App/>
);