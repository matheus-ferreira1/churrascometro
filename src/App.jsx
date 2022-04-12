import { Criancas } from './components/Criancas/Criancas';
import Duracao from './components/Duracao/Duracao';
import { Pessoas } from './components/Pessoas/Pessoas';
import './global.css'

function App() {
  return (
    <div className='container'>
      <h1>Churrascômetro</h1>
      <Pessoas />
      <Criancas />
      <Duracao />
    </div>    
  );
}

export default App;
