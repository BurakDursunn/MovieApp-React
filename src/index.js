import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

/* ReactDOM.render(<App />, document.getElementById('root'));   */