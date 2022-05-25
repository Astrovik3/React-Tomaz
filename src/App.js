import React from 'react';
import { Grid } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Grid className="App">
      <NavBar />
      <ItemListContainer greeting={"futura lista de productos"}/>
    </Grid>
  );
}

export default App;
