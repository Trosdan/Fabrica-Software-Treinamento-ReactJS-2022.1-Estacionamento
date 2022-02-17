import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';

function FormVeiculo() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function enviarFormulario(data) {
    console.log({ data });
  }

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
          ragister={register('nome', { required: true })}
          error={errors.modelo}
        />
        
        <Input 
          label="Placa"
          ragister={register('placa', { required: true })}
          error={errors.placa}
        />
        
        <Input 
          label="Cor"
          ragister={register('cor', { required: true })}
          error={errors.cor}
        />
        <button>ENVIAR</button>
      </form>
    </div>  
  )
}

export { FormVeiculo };