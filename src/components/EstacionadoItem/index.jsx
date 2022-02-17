import { format } from 'date-fns'

function EstacionadoItem(props) {
  return (
    <tr>
      <td>{props.veiculoNomeCliente}</td>
      <td>{props.veiculoPlaca}</td>
      <td>{format(props.dataEntrada, 'dd/MM/yyyy HH:mm')}</td>
      <td>{props.dataSaida ? format(props.dataSaida, 'dd/MM/yyy HH:mm') : "--"}</td>
    </tr>
  )
}

export { EstacionadoItem }