import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);
  const cartListVar = [...cartList];

  const addItem = (item, qty) => {
    const indexProd = cartListVar.findIndex((prod) => prod.idItem === item.idItem);

    if(indexProd !== -1) {
      cartListVar[indexProd].qty = cartListVar[indexProd].qty + qty
    } 
    else {
      cartListVar.push({...item, qty});
    }
    setCartList(cartListVar);

    //setCartList([...cartList, item]);
  }
  const removeItem = (idItem) => {
    setCartList([...cartList.filter(prod => prod.idItem !== idItem)]);
  }
  const clear = () => {
    setCartList([]);
  }
  const cantProds = () => {
    var cantPrendas = 0;
    var cuenta = cartList.map((item) => item.qty);

    cantPrendas = cuenta.reduce((a, b) => a + b, 0);
    
    return cantPrendas;
  }
  const precioTotal = () => {
    var total = 0;
    var precio = cartList.map((item) => item.price * item.qty);

    total = precio.reduce((a, b) => a + b, 0);
    
    return total;
  }

  return(
    <CartContext.Provider value={{cartList, addItem, removeItem, clear, cantProds, precioTotal}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
