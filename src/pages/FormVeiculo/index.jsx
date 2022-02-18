import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { postVeiculo } from '../../services/api/veiculoService';

import { Input } from '../../components/Input';

function FormVeiculo() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigate();

  async function enviarFormulario(data) {
    navigation('/veiculo');
    // try {
    //   await postVeiculo({
    //     nome_cliente: data.nome,
    //     modelo_carro: data.modelo,
    //     placa: data.placa,
    //     cor: data.cor
    //   });
    // } catch (e) {
    //   alert('Não possivel cadastrar o veiculo');
    // }
  }

  console.log({errors})

  return (
    <div>
      <h2>Cadastro de Veículo</h2>
      <form onSubmit={handleSubmit(enviarFormulario)} >
        <Input 
          label="Nome"
          register={register('nome', { required: true })}
          error={errors.nome}
        />
        
        <Input 
          label="Modelo"
          register={register('modelo', { required: true })}
          error={errors.modelo}
        />
        
        <Input 
          label="Placa"
          register={register('placa', { required: true })}
          error={errors.placa}
        />
        
        <Input 
          label="Cor"
          register={register('cor', { required: true })}
          error={errors.cor}
        />
        <button>ENVIAR</button>
      </form>
    </div>  
  )
}

export { FormVeiculo };