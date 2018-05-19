'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div style={{padding: '20px'}}>
        <h1>Component discoverer</h1>

        <h2>Logo</h2>
        <div style={{display: 'inline-block', background: 'purple'}}><Logo/></div>

        {/* more components go here... */}

    </div>,
    document.getElementById('pad')
);

