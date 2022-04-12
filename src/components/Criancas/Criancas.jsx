export function Criancas(props) {
  return (
    <input 
      type="number" 
      name="criancas" 
      placeholder='Crianças'
      min="0"
      max="99999999"
      value={props.value}
      onChange={event => props.name(event.target.value)}
    />
  )
}
