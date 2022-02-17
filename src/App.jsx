import "./GlobalStyles.css";
import { Routes, Route } from 'react-router-dom';

import { Menu } from './components/Menu';

import { ListarEstacionados } from './pages/ListarEstacionados';
import { ListarVeiculos } from './pages/ListarVeiculos';
import { ListarEstacionamentos } from './pages/ListarEstacionamentos';
import { FormVeiculo } from './pages/FormVeiculo';
import { FormEstacionamento } from './pages/FormEstacionamento';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<ListarEstacionados />} />
        <Route path="/veiculo" element={<ListarVeiculos />} />
        <Route path="/estacionamento" element={<ListarEstacionamentos />} />
        <Route path="/veiculo/cadastro" element={<FormVeiculo />} />
        <Route path="/veiculo/:id/estacionamento/registro" element={<FormEstacionamento />} />
      </Routes>
    </div>
  );
}

export default App;
