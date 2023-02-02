import logo from './logo.svg';
import './App.css';
import CompShowUser from './componentesRegistro/showComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateUser from './componentesRegistro/showCreate';
import CompEditUser from './componentesRegistro/showEdit';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowUser />} />
          <Route path='/agregar' element={ <CompCreateUser />} />
          
          <Route path='/usuarios/:rutId' element={ <CompEditUser />} />
            
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
