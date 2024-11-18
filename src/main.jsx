import { createRoot } from 'react-dom/client'
import React from "react";
import App from './App.jsx'

const DEBUG = false;

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App Devmode={DEBUG} />
    </React.StrictMode>
)
