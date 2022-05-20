import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Global CSS
import GlobalStyled from "./components/globalcomponents/GlobalStyle.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* Global CSS */}
        <GlobalStyled />
        <App />
    </>
);
