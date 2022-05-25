import React from 'react';
import { Grid, AppBar } from '@mui/material';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <AppBar>
      <Grid id='navBar'>
        <p id='titleBrand'>
          ROPAPP
        </p>
        
        <ul id='menuNavBar'>
          <li>home</li>
          <li>shop</li>
          <li>men</li>
          <li>women</li>
          <li>search</li>
        </ul>

        <Grid id='cartWidget'>
          <CartWidget />
        </Grid>

      </Grid>
    </AppBar>
  );
};

export default NavBar;