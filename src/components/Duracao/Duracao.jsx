function Duracao(props) {
  return (
   <input 
      type="number" 
      name="duracao" 
      placeholder='Duração (horas)'
      value={props.value}
      onChange={event => props.name(event.target.value)}
   />
  )
}

export default Duracao