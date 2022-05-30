import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';

const {products} = require('../utils/products');

const ItemDetailContainer = () => {
  const [dato, setDatos] = useState({});

  useEffect(() => {
    customFetch(2000, products[2])
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, []);

  return (
    <Grid>
      <ItemDetail item={dato} />
    </Grid>
  );
};
  
export default ItemDetailContainer;
