import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initFirebase } from './firebase/config.js'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <ToastContainer transition={Slide} />
    </React.StrictMode>
)
