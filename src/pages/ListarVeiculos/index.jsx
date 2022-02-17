import { useState } from "react";
import { VeiculoItem } from '../../components/VeiculoItem';

function ListarVeiculos() {
  const [veiculos, setVeiculos] = useState([
    {
      id: 1,
      nome_cliente: "Jordan Oliveira",
      modelo_carro: "teste",
      placa: "SWD-3213"
    },
    {
      id: 2,
      nome_cliente: "Jordan Oliveira",
      modelo_carro: "teste",
      placa: "SWD-3213"
    },
  ]);

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