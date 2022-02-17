import { useState } from 'react';

import { EstacionadoItem } from '../../components/EstacionadoItem';

function ListarEstacionados() {
  const [estacionados, setEstacionados] = useState([
    {
      date_entrada: new Date(),
      data_saida: null,
      veiculo__nome_cliente: "Jordan Oliveira",
      veiculo__placa: "DWS-2313",
      veiculo: 1,
    },
    {
      date_entrada: new Date(),
      data_saida: null,
      veiculo__nome_cliente: "Jordan Oliveira",
      veiculo__placa: "DWS-2313",
      veiculo: 2,
    }
  ]);
  
  return (
    <div className='listar-informacoes'>
      <h2>Listar Estacionados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Placa</th>
            <th>Entrada</th>
          </tr>
        </thead>
        <tbody>
          {estacionados.map(estacionado => {
            return (
              <EstacionadoItem
                key={estacionado.veiculo}
                veiculoNomeCliente={estacionado.veiculo__nome_cliente}
                veiculoPlaca={estacionado.veiculo__placa}
                dataEntrada={estacionado.date_entrada}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { ListarEstacionados };