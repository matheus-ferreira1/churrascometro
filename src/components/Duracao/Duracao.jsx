function Duracao(props) {
  return (
   <input 
      type="number" 
      name="duracao" 
      placeholder='Duração (horas)'
      min="1"
      max="99999999"
      value={props.value}
      onChange={event => props.name(event.target.value)}
   />
  )
}

export default Duracao