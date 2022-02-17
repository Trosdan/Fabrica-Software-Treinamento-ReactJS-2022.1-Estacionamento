import { IoEnterOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function VeiculoItem(props) {
  return (
    <tr>
      <td>{props.nomeCliente}</td>
      <td>{props.modeloCarro}</td>
      <td>{props.placa}</td>
      <td className='item-button' >
        <Link to={`/veiculo/${props.veiculoId}/estacionamento/registro`} >
          <IoEnterOutline color='#000' />
        </Link>
      </td>
    </tr>
  )
}

export { VeiculoItem };