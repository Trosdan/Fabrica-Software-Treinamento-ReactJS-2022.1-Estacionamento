import './styles.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <Link to="/">ESTACIONADOS</Link>
      <Link to="/veiculo">VEICULOS</Link>
      <Link to="/estacionamento">ESTACIONAMENTOS</Link>
      <Link className='novo-veiculo' to="/veiculo/cadastro">+ VEICULO</Link>
    </div>
  )
}

export { Menu };