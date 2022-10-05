
/* 
  import "./css/normalize.css"; 
  import './App.css';
*/

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import AgregarMedioPage from './pages/AgregarMedioPage';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';

function App(){
    return(
        <div claseName="App">
            <Header/>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="Home" element={<HomePage/>} />
                    <Route path="nosotros" element={<NosotrosPage/>} />
                    <Route path="servicios" element={<ServiciosPage/>} />
                    <Route path="contacto" element={<ContactoPage/>} />
                    <Route path="agregarmedio" element={<AgregarMedioPage/>} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;


/*
  npm i descarga las dependencias.-
  npm start inicia el project react.-


  import logo from './logo.svg';
import './App.css';

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/