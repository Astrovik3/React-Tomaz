import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const {products} = require('../utils/products');

const ItemDetailContainer = () => {
  const [dato, setDatos] = useState({});
  const {ids} = useParams();

  useEffect(() => {
    customFetch(2000, products.find(item => item.ids === parseInt(ids)))
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
