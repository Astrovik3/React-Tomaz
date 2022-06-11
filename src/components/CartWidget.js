import React, { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <Badge badgeContent={test.cantProds()} color='secondary'>
      <ShoppingBagOutlinedIcon />
    </Badge>
  );
};
  
export default CartWidget;
