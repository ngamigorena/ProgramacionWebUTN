import './App.css';
import Navbar from "./Components/navbar/navbar";
import Home from './Components/home/home';
import Intro from './Components/intro/intro';
import Footer from "./Components/footer/footer";
import Contenido from './Components/contenido/contenido';
import Contacto from './Components/contacto/contacto';
import Ejemplo from './Components/ejemplos/ejemplo';
import Personajes from './Components/personajes/personajes';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="navi">
      <BrowserRouter>
      <Navbar tituloPagina = "Primero"/>
      <Routes>
        <Route path="/blue" element={<Navbar tituloPagina = "Segundo" color="darkblue" />} />
        <Route path="/green" element={<Navbar tituloPagina = "Tercero" color="darkgreen" />} />
        <Route path="/elementos" element={<Contenido/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/ejemplo" element={<Ejemplo/>} />
        <Route path="/personajes" element={<Personajes/>} />
      </Routes>
      </BrowserRouter>
    
    
    </div>




  );
}

export default App;
