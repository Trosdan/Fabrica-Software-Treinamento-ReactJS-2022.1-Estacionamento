import { api } from './';

export async function getVeiculos() {
  const response = await api.get('/veiculos');
  return response.data;
}

export async function getByID(id) {
  const response = await api.get(`/veiculos/${id}`);
  return response.data;
}

export async function postVeiculo({ nome_cliente, modelo_carro, placa, cor }) {
  await api.post('/veiculos', {
    nome_cliente,
    modelo_carro,
    placa,
    cor,
  });
}
