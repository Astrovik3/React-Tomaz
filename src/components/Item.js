import React from "react";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ids, name, price, photo}) => {
  
  return (
    <Grid id='itemSolo'>
      <p>{ids}</p>
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <Link className='links' to={`/item/${ids}`}>
          <img id="fotoSola" src={photo} alt="si" />
        </Link>
      </div>

    </Grid>
  );
};
  
export default Item;