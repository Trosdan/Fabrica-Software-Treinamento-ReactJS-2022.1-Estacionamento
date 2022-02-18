import { useState, useEffect } from "react";

import { VeiculoItem } from '../../components/VeiculoItem';
import { getVeiculos } from '../../services/api/veiculoService';

function ListarVeiculos() {
  const [veiculos, setVeiculos] = useState([]);

  async function loadVeiculos() {
    try {
      const data = await getVeiculos();
      setVeiculos(data);
    } catch (e) {
      alert('Não foi possivel carregar os dados.');
    }
  }

  useEffect(() => {
    loadVeiculos();
  }, []);

  return (
    <div className="listar-informacoes" >
      <h2>Listar Veículos</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Modelo</th>
              <th>Placa</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map(veiculo => {
              return (
                <VeiculoItem
                  key={veiculo.id}
                  veiculoId={veiculo.id}
                  nomeCliente={veiculo.nome_cliente}
                  modeloCarro={veiculo.modelo_carro}
                  placa={veiculo.placa}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { ListarVeiculos }