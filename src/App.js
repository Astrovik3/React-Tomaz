import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import MenScreen from './screens/MenScreen';
import WomenScreen from './screens/WomenScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/MenScreen" element={<MenScreen/>} />
        <Route path="/MenScreen/:id" element={<ItemDetailContainer/>} />
        <Route path="/WomenScreen" element={<WomenScreen/>} />

      </Routes>
    </BrowserRouter>
  );
}

/* <Route exact path='/' component={Home} /> */


export default App;
