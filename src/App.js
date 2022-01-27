import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Certificates from './page/Certificates';

function App() {
  return (
    <div className="App ">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home' element={<Certificates/>}/>
      </Routes>
    </div>
  );
}

export default App;
