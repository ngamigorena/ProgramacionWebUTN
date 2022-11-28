import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import NavbarN from './components/navbarN/navbarN';
import BuscadorDePropiedades from './components/buscadorDePropiedades/buscadorDePropiedades';
import Institucional from './components/institucional/institucional';
import Servicios from './components/servicios/servicios';
import Contacto from './components/contacto/contacto';
import PropEnVenta from './components/venta/venta';
import GoUpButton from './components/buttonGoUP/buttonGoUp';


function App() {
  
  return (

    <BrowserRouter>
    <NavbarN /> 
      <Routes>
        <Route path='' element={<NavbarN/>}/>
          <Route index element={<Home/>} />
          <Route path='venta' element={<PropEnVenta/>} />
          <Route path='buscadorDePropiedades' element={<BuscadorDePropiedades/>} />
          <Route path='institucional' element={<Institucional/>} />
          <Route path='servicios' element={<Servicios/>} />
          <Route path='contacto' element={<Contacto/>} />
          <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    <GoUpButton />
    <Footer />
    </BrowserRouter>

  );
}

export default App;
