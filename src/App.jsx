import { useState } from 'react';
import { Criancas } from './components/Criancas/Criancas';
import Duracao from './components/Duracao/Duracao';
import { Adultos } from './components/Adultos/Adultos';
import './global.css'

export default function App() {
  const [adultos, setAdultos] = useState('')
  const [criancas, setCriancas] = useState('')
  const [duracao, setDuracao] = useState('')

  function calculate() {
    console.log(adultos, criancas, duracao)
  }

  function clearAll() {
    setAdultos('')
    setCriancas('')
    setDuracao('')
  }

  return (
    <div className='container'>
      <h1>Churrascômetro</h1>
      <Adultos value={adultos} name={setAdultos} />
      <Criancas value={criancas} name={setCriancas} />
      <Duracao value={duracao} name={setDuracao} />
      <button onClick={calculate}>Calcular</button>
      <button onClick={clearAll}>Limpar</button>
    </div>    
  );
}