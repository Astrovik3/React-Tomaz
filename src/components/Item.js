import React from "react";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({idItem, name, price, photo}) => {
  
  return (
    <Grid id='itemSolo'>
      <p>{idItem}</p>
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <Link className='links' to={`/item/${idItem}`}>
          <img id="fotoSola" src={photo} alt="si" />
        </Link>
      </div>

    </Grid>
  );
};
  
export default Item;