import React from 'react';
import { Grid } from '@mui/material';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <Grid className="App">
      <NavBar />
      <p id='itemListContainer'> ... BUILDING HOME ... </p>
      <p id='itemListContainer'> ... PÁGINA PRINCIPAL - HOME ... </p>
    </Grid>
  );
}


export default Home;