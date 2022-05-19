import React from "react";
import { Badge } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CartWidget = () => {

  return (
    <Badge badgeContent={3} color='secondary'>
      <ShoppingBagOutlinedIcon />
    </Badge>
  );
};
  
export default CartWidget;
