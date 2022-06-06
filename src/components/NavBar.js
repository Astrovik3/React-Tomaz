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
            <Link className='links' to={"/categoria/male"}> men </Link>
          </li>
          
          <li>
            <Link className='links' to={"/categoria/female"}> women </Link>
          </li>
          <li>accessories</li>
          <li>search</li>
        </ul>

        
        <Grid id='cartWidget'>
          <Link className='links' to={"/cart"}>
            <CartWidget />
          </Link>
        </Grid>

      </Grid>
    </AppBar>
  );
}

export default NavBar;