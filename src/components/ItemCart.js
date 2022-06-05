import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material';

const ItemCart = () => {

  return (
    <Grid className="gridmargin">
      <Link className='links' to={"/cart"}>
        <Button color="secondary" variant="outlined" size="small">IR A CART</Button>
      </Link>
    </Grid>
  );
};
  
export default ItemCart;
