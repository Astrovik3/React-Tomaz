import React from 'react';
import { Grid } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Grid className="App">
      <NavBar />
      <ItemDetailContainer />
    </Grid>
  );
}

/*<ItemListContainer greeting={"NUESTROS PRODUCTOS"}/>*/

export default App;
