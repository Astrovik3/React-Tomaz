import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import ItemList from './ItemList';
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";


const ItemListContainer = ({greeting}) => {
  const [datos, setDatos] = useState([]); 
  const {category} = useParams();

  useEffect(() => {
    firestoreFetch(category)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, [category]);

  useEffect(() => {
    return(() => {
      setDatos([]);
    });
  }, []);

 /* useEffect(() => {
    customFetch(2000, products.filter(item => item.category === category))
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, [category]);*/

  return (
    <Grid className="App">
      <Grid id='itemListContainer'>
        <NavBar />
        <p>
          {greeting}
        </p>
        <br />
        <ItemList items={datos} />
      </Grid>
    </Grid>
  );
}
  
export default ItemListContainer;
