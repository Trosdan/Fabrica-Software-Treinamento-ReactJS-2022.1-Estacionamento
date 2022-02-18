import { useState, useEffect } from 'react';

import { EstacionadoItem } from '../../components/EstacionadoItem';
import { getEstacionado } from '../../services/api/estacionadosService';

function ListarEstacionados() {
  const [estacionados, setEstacionados] = useState([]);

  useEffect(() => {
    getEstacionado().then(res => setEstacionados(res));
  }, [])
  
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
                dataEntrada={estacionado.data_entrada}
                dataSaida={estacionado.data_saida}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { ListarEstacionados };