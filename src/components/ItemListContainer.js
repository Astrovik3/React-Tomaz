import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import ItemCount from './ItemCount';
import customFetch from '../utils/customFetch';
import ItemList from './ItemList';

const {products} = require('../utils/products');

const ItemListContainer = ({greeting}) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, products)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, []);

  return (
    <Grid id='itemListContainer'>
      <p>
        {greeting}
      </p>
      <br />
      <ItemList items={datos} />
      <ItemCount stock={8} initial={0}/>

    </Grid>
  );
};
  
export default ItemListContainer;
