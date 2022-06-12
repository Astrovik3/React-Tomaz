import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Grid style={{display: 'flex', marginTop: "65px", justifyContent: 'center', backgroundColor: '#8ba2d1'}}>
        <p style={{color: 'white', fontWeight: 'bold', fontSize: 'x-large'}}>TU CARRITO</p>
      </Grid>
      <Grid style={{display: 'flex', justifyContent: 'right', marginRight: '50px', paddingBottom: '25px'}}> 
        <Button id='bttnEliminar' variant="contained"  color="error" size="small" onClick={() => test.clear()}>vaciar carrito</Button>
      </Grid>
      {
        test.cartList.length === 0
        ?
        <Grid style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>TU CARRITO ESTÁ VACÍO</p>
          <br/>
          
          <Link className='links' to={"/"}>
          <Button id='bttnBack' variant="contained" size="small">home</Button>
          </Link>
        </Grid>
        : test.cartList.map((item) => 
          <Grid id="gridProductoCart">
            <Grid id="cartPhoto" >
              <img src={item.photo} alt='itemDetail'/>
            </Grid>
            <Grid>
              <p id="cartProducto">{item.name}</p>
              <p>id producto: {item.ids}</p>
              <p>cantidad: {item.qty}</p>
              <p style={{fontSize: 'large', fontWeight: 'bold'}}>${item.price}</p>
            </Grid>
            <Grid>
              <Button id='bttnEliminar' variant="outlined" color="error" size="small" onClick={() => test.removeItem(item.ids)}>eliminar item</Button>
            </Grid>
          </Grid>)
      }
      <Grid style={{display: 'flex', justifyContent: 'right', marginRight: '50px'}}>
        <p>TOTAL: ${test.precioTotal()}</p>
      </Grid>
    </Grid>
  );
};
  
export default Cart;