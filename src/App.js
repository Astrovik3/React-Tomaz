import React from 'react';
import { Grid } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <Grid className="App">
      <NavBar></NavBar>
      <p>
        cuerpo del sitio
      </p>
    </Grid>
  );
}

export default App;
