import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARFWXK7xggdqifuZGGNWSDIls4RUKS4HI",
  authDomain: "tour-b8d38.firebaseapp.com",
  projectId: "tour-b8d38",
  storageBucket: "tour-b8d38.appspot.com",
  messagingSenderId: "968584925490",
  appId: "1:968584925490:web:caf899550862532f27c72b",
  measurementId: "G-V62Y5WD44V"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
