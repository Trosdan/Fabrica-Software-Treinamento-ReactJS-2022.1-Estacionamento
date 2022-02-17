import './styles.css';

function Input(props) {
  return (
    <div className='input'>
      <label>{props.label}</label>
      <input {...props.register} type={props.type} disabled={props.disabled} />
      {props.error ? (<span>Campo obrigatório.</span>) : null}
    </div>
  )
}

export { Input }