import { useState } from 'react';
import { Criancas } from './components/Criancas/Criancas';
import Duracao from './components/Duracao/Duracao';
import { Adultos } from './components/Adultos/Adultos';
import './global.css'
import { Resultado } from './components/Resultado/Resultado';

export default function App() {
  const [adultos, setAdultos] = useState('')
  const [criancas, setCriancas] = useState('')
  const [duracao, setDuracao] = useState('')
  const [result, setResult] = useState(false)

  function calculate() {
    if (adultos === '' || duracao === '') {
      alert('Insira a quantidade de adultos e duração')
    } else {

      setResult(true)
    }
  }

  function clearAll() {
    setAdultos('')
    setCriancas('')
    setDuracao('')
    setResult(false)
  }

  return (
    <div className='container'>
      <h1>Churrascômetro</h1>
      <Adultos value={adultos} name={setAdultos} />
      <Criancas value={criancas} name={setCriancas} />
      <Duracao value={duracao} name={setDuracao} />
      <button id='btn-calc' onClick={calculate}>Calcular</button>
      <button id='btn-clear' onClick={clearAll}>Limpar</button>
      {result == true && 
        <Resultado 
          adultos={adultos}
          criancas={criancas}
          duracao={duracao}
        />}
    </div>    
  );
}