import { useEffect } from 'react';
import Main from './Components/Main/Main.jsx';
import Navbar from './Components/NavBar/Navbar.jsx';
import Astros from './Components/Astros/Astros.jsx';
import Apod from './Components/Apod/Apod.jsx';
// import Appbar from './Components/Appbar/Appbar.jsx'
import { Route, Routes } from 'react-router-dom';
import './App.css'


// Constante de login
const isLogged = true;
// Guardamos en localStorage
localStorage.setItem('login', isLogged);



const userData = {
  name: 'Ingrid',
  age: '28',
}

//Link para PErsonas en el espacio
//Link para API NASA
//Logo/Link para login o ver perfil

// const links = ['astros', 'apod', true];
const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]



//Lik para las personas en el espacio
//Link para la API NASA
//Logo / link para login y ver perfil




//Navbar ---------------

//Main ---- ruta: /
//Astros -- ruta: /astros
//APOD --- ruta: /apod
function App() {
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);

  return (
    <>
      <Navbar links={links}
        link= {links}
        isLogged={JSON.parse(localStorage.login)}
      />


      <Routes>
        <Route 
          path='/' 
          element = {<Main {...userData} />} 
        />

        <Route 
          path='/astros' 
          element = {<Astros />} 
        />

        <Route 
        path='/apod'
        element = {<Apod />}
        />
        </Routes>
    </>
  )
}

export default App