import { useState } from 'react';
import { EstacionadoItem } from '../../components/EstacionadoItem';

function ListarEstacionamentos() {
  const [estacionamentos, setEstacionamentos] = useState([
    {
      date_entrada: new Date(),
      data_saida: new Date(),
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
    <div className="listar-informacoes" >
      <h2>Listar Estacionamentos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Placa</th>
            <th>Entrada</th>
            <th>Saída</th>
          </tr>
        </thead>
        <tbody>
          {estacionamentos.map(estacionamentos => {
            return (
              <EstacionadoItem
                key={estacionamentos.veiculo}
                veiculoNomeCliente={estacionamentos.veiculo__nome_cliente}
                veiculoPlaca={estacionamentos.veiculo__placa}
                dataEntrada={estacionamentos.date_entrada}
                dataSaida={estacionamentos.data_saida}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { ListarEstacionamentos };