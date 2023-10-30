import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ItemListContainer from "./Conteiner"
import CartWidget from "./card";
import Navbar from "./Navbar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <Navbar/>
)
