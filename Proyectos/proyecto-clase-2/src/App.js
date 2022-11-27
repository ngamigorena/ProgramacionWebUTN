import './App.css';
import Footer from './componentes/footer/footer';
import Home from './componentes/home/home';
import Intro from './componentes/intro/intro';
import Menu from './componentes/navbar/navbar';
import Navbar from './componentes/navbar/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route>
            

          </Route>
        <Home />
        </Routes>
        
        
        <Footer />
      </BrowserRouter>

      

      
    </div>
  )
}

export default App;
