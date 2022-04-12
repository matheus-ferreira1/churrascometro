import './Resultado.css'

export function Resultado(props) {

   function carnePerCapta(duration) {
      if (duration >= 6) {
        return 650;
      } else {
        return 400;
      }
    }
  
    function cervejaPerCapta(duration) {
      if (duration >= 6) {
        return 2000;
      } else {
        return 1200;
      }
    }
    
    function bebidaPerCapta(duration) {
      if (duration >= 6) {
        return 1500;
      } else {
        return 1000;
      }
    }

    let qtdeTotalCarne = carnePerCapta(props.duracao) * props.adultos + (carnePerCapta(props.duracao) / 2 * props.criancas);
    let qtdeTotalCerveja = cervejaPerCapta(props.duracao) * props.adultos;
    let qtdeTotalBebida = bebidaPerCapta(props.duracao) * props.adultos + (bebidaPerCapta(props.duracao) / 2 * props.criancas);

   return (
      <div className="results">
         <p>{qtdeTotalCarne / 1000} Kg de Carne</p>
         <p>{Math.ceil(qtdeTotalCerveja / 330)} longnecks de Cerveja</p>
         <p>{qtdeTotalBebida / 1000} litros de Suco/Refrigerante</p>
      </div>
   )
}