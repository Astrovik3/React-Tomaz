import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);
  const cartListVar = [...cartList];

  const addItem = (item, qty) => {
    const indexProd = cartListVar.findIndex((prod) => prod.ids === item.ids);

    if(indexProd !== -1) {
      cartListVar[indexProd].qty = cartListVar[indexProd].qty + qty
    } 
    else {
      cartListVar.push({...item, qty});
    }
    setCartList(cartListVar);

    //setCartList([...cartList, item]);
  }
  const removeItem = (ids) => {
    setCartList([...cartList.filter(prod => prod.ids !== ids)]);
  }
  const clear = () => {
    setCartList([]);
  }

  return(
    <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
