import { api } from './';

export async function getVeiculos() {
  const response = await api.get('/estacionamento/');
  return response.data;
}

export async function getEstacionado() {
  const response = await api.get('/estacionamento_veiculos/');
  return response.data;
}

export async function getEstacionamentoByID(id) {
  const response = await api.get(`/estacionamento/${id}/`);
  return response.data;
}

export async function postEstacionamento({ veiculo, data_saida }) {
  await api.post('/estacionamento/', {
    veiculo,
    data_saida,
  });
}

export async function putEstacionamento({ id, veiculo, data_saida }) {
  await api.put(`/estacionamento/${id}/`, {
    veiculo,
    data_saida,
  });
}
