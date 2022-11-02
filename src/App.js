import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Header />
      <h1>Este es mi primer componente</h1>
      <h2>El valor de number es: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
      <button onClick={() => setNumber(number - 1)}>Decrementar</button>
      <Footer />
    </div>
  );
}

export default App;
