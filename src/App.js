
import './App.css';
import Home from './pages/IcaptionPage';
import Tag from "./pages/ItagPage"
import DM from "./pages/IdmPage"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tag' element={<Tag/>}></Route>
        <Route path='/dm' element={<DM/>}></Route>
      </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
