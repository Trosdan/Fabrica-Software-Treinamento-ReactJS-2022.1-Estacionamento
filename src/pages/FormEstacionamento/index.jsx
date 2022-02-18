import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { format, parseJSON, addHours } from 'date-fns';

import { Input } from '../../components/Input';

import { getVeiculoByID } from '../../services/api/veiculoService'
import { postEstacionamento, getEstacionamentoByID, putEstacionamento } from '../../services/api/estacionadosService'

function FormEstacionamento() {
  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [isNew, setIsNew] = useState(true);
  
  async function enviarRegistro(data) {
    try {
      if(isNew) {
        await postEstacionamento({
          veiculo: params.idVeiculo,
          data_saida: data.dataSaida,
        });
      } else {
        await putEstacionamento({
          id: params.idEstacionamento,
          veiculo: params.idVeiculo,
          data_saida: data.dataSaida,
        })
      }
    }
    catch (e) {
      alert("Não foi possivel cadastrar");
    }
  }

  async function loadVeiculo() {
    const veiculo = await getVeiculoByID(params.idVeiculo);
    reset({
      nome: veiculo.nome_cliente,
      modelo: veiculo.modelo_carro,
      placa: veiculo.placa,
    })
  }

  async function loadEstacionamento() {
    try {
      const estacionamento = await getEstacionamentoByID(params.idEstacionamento);
      reset({
        dataEntrada: format(parseJSON(estacionamento.data_entrada), "yyyy-MM-dd'T'HH:mm")
      });
      setIsNew(false);
    } catch (e) {
      navigate('/veiculo');
      alert('Estacionamento não encontrado');
    }
  }

  useEffect(() => {
    loadVeiculo();
  }, []);
  
  useEffect(() => {
    if(params.idEstacionamento !== "registro") {
      loadEstacionamento();
    }else {
      reset({
        dataEntrada: format(new Date(), "yyyy-MM-dd'T'hh:mm")
      })
    }
  }, [params, reset]);

  return (
    <div>
      <h2>Registrar estacionamento</h2>
      <form onSubmit={handleSubmit(enviarRegistro)}>
        <Input 
          register={register("nome")}
          label="Nome" 
          value="Jordan" 
          disabled 
        />
        <Input 
          register={register("modelo")}
          label="Modelo" 
          value="Ford" 
          disabled 
        />
        <Input 
          register={register("placa")}
          label="Placa" 
          value="SDQ-2313" 
          disabled 
        />
        <Input 
          label="Registro de Entrada" 
          register={register("dataEntrada")}
          type="datetime-local"
          disabled
        />
        <Input
          label="Registro de Saída" 
          register={register("dataSaida")} 
          type="datetime-local" 
          disabled={isNew}
        />
        <button type='submit' >ENVIAR</button>
      </form>
    </div>
  )
}

export { FormEstacionamento };