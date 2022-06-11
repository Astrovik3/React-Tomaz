import React, { useContext } from "react";
import { Button, Grid } from '@mui/material';
import { CartContext } from "./CartContext";
import NavBar from "./NavBar";

const Cart = () => {
    const test = useContext(CartContext);

    //var precio = 0;

    //var total = test.cartList.map((item) => precio = precio + (parseInt(item.price) * item.qty));


  return (
    <Grid>
      <NavBar />
      <Grid style={{marginTop: "80px"}}> 
        <Button id='bttnEliminar' variant="contained"  color="error" size="small" onClick={() => test.clear()}>vaciar carrito</Button>
      </Grid>
      {
        test.cartList.length === 0
        ?
        <p>TU CARRITO ESTÁ VACÍO</p>
        : test.cartList.map((item) => 
          <Grid id="gridProductoCart">
            <Grid id="cartPhoto" >
              <img src={item.photo} alt='itemDetail'/>
            </Grid>
            <Grid>
              <p id="cartProducto">{item.name}</p>
              <p>id producto: {item.ids}</p>
              <p>precio: ${item.price}</p>
              <p>cantidad: {item.qty}</p>
            </Grid>
            <Grid>
              <Button id='bttnEliminar' variant="outlined" color="error" size="small" onClick={() => test.removeItem(item.ids)}>eliminar item</Button>
            </Grid>
          </Grid>)
      }
    </Grid>
  );
};
  
export default Cart;