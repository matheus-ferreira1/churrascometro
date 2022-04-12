export function Adultos(props) {
  return (
   <input 
      type="number" 
      name="adultos" 
      placeholder='Adultos'
      value={props.value}
      onChange={event => props.name(event.target.value)}
   />
  )
}
