export function Criancas(props) {
  return (
    <input 
      type="number" 
      name="criancas" 
      placeholder='Crianças'
      value={props.value}
      onChange={event => props.name(event.target.value)}
    />
  )
}
