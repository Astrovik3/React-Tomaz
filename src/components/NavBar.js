import React from 'react';
import { Grid } from '@mui/material';

const NavBar = () => {

  return (
    <Grid className='navBar'>
      <Grid>
      <p id='titleBrand'>
        ROPAPP
      </p>
      </Grid>
      <Grid>
        <ul id='menuNavBar'>
          <li>home</li>
          <li>shop</li>
          <li>men</li>
          <li>women</li>
          <li>search</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default NavBar;