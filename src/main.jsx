import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const DEBUG = false;

createRoot(document.getElementById('root')).render(<App Devmode={DEBUG} />)
