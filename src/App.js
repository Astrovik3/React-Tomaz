import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/categoria/:category" element={<ItemListContainer greeting={"NUESTROS PRODUCTOS"}/>} />
        <Route path="/item/:ids" element={<ItemDetailContainer/>} />

      </Routes>
    </BrowserRouter>
  );
}

/* <Route exact path='/' component={Home} /> */


export default App;
