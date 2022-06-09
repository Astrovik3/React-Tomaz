import React, { useContext } from "react";
import { Button, Grid } from '@mui/material';
import { CartContext } from "./CartContext";
import NavBar from "./NavBar";

const Cart = () => {
    const test = useContext(CartContext);


  return (
    <Grid>
      <NavBar />
      <Grid style={{marginTop: "80px"}}>
        <Button id='bttnEliminar' variant="outlined" size="small" onClick={() => test.clear()}>vaciar cart</Button>
      </Grid>
      {
        test.cartList.length === 0 
        ?
        <p>TU CARRITO ESTÁ VACÍO</p>
        : test.cartList.map((item) => 
          <Grid id="gridProductoCart">
            <Grid>
              <img src={item.photo} alt='itemDetail' />
            </Grid>
            <Grid>
              <p>producto: {item.name}</p>
              <p>id producto: {item.ids}</p>
              <p>precio: ${item.price}</p>
              <p>cantidad: {item.qty}</p>
            </Grid>
            <Grid>
              <Button id='bttnEliminar' variant="outlined" size="small" onClick={() => test.removeItem(item.ids)}>eliminar item</Button>
            </Grid>
          </Grid>)
      }
    </Grid>
  );
};
  
export default Cart;