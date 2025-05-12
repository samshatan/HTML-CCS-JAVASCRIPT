// const heading = document.createElement('h1');
// heading.innerHTML = "Hello World";

// const root = document.getElementById('root');
// root.appendChild(heading);

import React from 'react';
import ReactDOM from 'react-dom/client';

const headingtag = React.createElement("h1", {}, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingtag);