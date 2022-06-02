import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar } from '@mui/material';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    <AppBar>
      <Grid id='navBar'>
        <p id='titleBrand'>
          <Link className='links' to={"/"}> ROPAPP </Link>
        </p>
        
        <ul id='menuNavBar'>
          <li>
            <Link className='links' to={"/"}> home </Link>
          </li>
          <li>
            <Link className='links' to={"/MenScreen"}> men </Link>
          </li>
          
          <li>
            <Link className='links' to={"/WomenScreen"}> women </Link>
          </li>
          <li>accessories</li>
          <li>search</li>
        </ul>

        <Grid id='cartWidget'>
          <CartWidget />
        </Grid>

      </Grid>
    </AppBar>
  );
}

export default NavBar;