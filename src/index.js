import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Global CSS
import GlobalStyled from "./components/globalcomponents/GlobalStyle.jsx";

// Router
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        {/* Global CSS */}
        <GlobalStyled />
        <App />
    </HashRouter>
);
