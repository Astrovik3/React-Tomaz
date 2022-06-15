import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { firestoreFetchOne } from "../utils/firestoreFetch";


const ItemDetailContainer = () => {
  const [dato, setDatos] = useState([]);
  const {idItem} = useParams();

  useEffect(() => {
    //acá me debe dar UNDEFINED también...
    console.log(idItem);

    firestoreFetchOne(idItem)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, [idItem]);

  useEffect(() => {
    return(() => {
      setDatos([]);
    });
  }, []);

  
  /*useEffect(() => {
    customFetch(2000, products.find(item => item.id === parseInt(ids)))
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, []);*/

  return (
    <Grid>
      <NavBar />
      <ItemDetail item={dato} />
    </Grid>
  );
};
  
export default ItemDetailContainer;
