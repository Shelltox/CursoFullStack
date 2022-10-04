import logo from './logo.svg';
import './App.css';
import Head from './componentes/layout/Head';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Main from './componentes/layout/Main';
import Footer from './componentes/layout/Footer';

/* Mayusculas Componentes / Minusculas Etiqueta HTML */

function App() {
  return (
    <div className="App">
      <Head/>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;


/*
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