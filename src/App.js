import './App.css';
import './style.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div className="bar-container">
        <Header />
        <p><a href='/'>Iniciar Sesión</a></p>
      </div>
      
      <div className="cuerpo">
        <img src="./Dario_Turin_cv1.jpg" className="imagen" alt='imagen-perfil'/>
        <h1>Este es mi primer componente</h1>
        <h2>El valor de number es: {number}</h2>
        <button onClick={() => setNumber(number + 1)}>Incrementar</button>
        <button onClick={() => setNumber(number - 1)}>Decrementar</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
