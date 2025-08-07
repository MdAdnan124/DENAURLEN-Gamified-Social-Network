import logo from './logo.svg';
import './App.css';
import Section1 from './pages/sections/section1';
import Section2 from './pages/sections/section2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section1/>}/>
      <Route path="/section2" element={<Section2/>}/>
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
