import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';

import { getByID } from '../../services/api/veiculoService'

function FormEstacionamento() {
  const params = useParams();
  const { register, handleSubmit } = useForm();
  
  async function enviarRegistro(data) {
    try {
      // await postEstacionamento();
    }
    catch (e) {
      alert("Não foi possivel cadastrar");
    }
  }

  async function loadVeiculo() {
    const veiculo = await getByID(params.id);
  }

  useEffect(() => {

  }, []);

  return (
    <div>
      <h2>Registrar estacionamento</h2>
      <form onSubmit={handleSubmit(enviarRegistro)}>
        <Input 
          label="Nome" 
          value="Jordan" 
          disabled 
        />
        <Input 
          label="Modelo" 
          value="Ford" 
          disabled 
        />
        <Input 
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
        />
        <button type='submit' >ENVIAR</button>
      </form>
    </div>
  )
}

export { FormEstacionamento };