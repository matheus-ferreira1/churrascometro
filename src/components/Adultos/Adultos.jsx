export function Adultos(props) {
  return (
   <input 
      type="number" 
      name="adultos" 
      placeholder='Adultos'
      min="1"
      max="99999999"
      value={props.value}
      onChange={event => props.name(event.target.value)}
   />
  )
}
