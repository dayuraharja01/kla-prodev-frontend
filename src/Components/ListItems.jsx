import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

export const mainListItems = (
  <>
    <ListItemButton component={Link} to={"/dashboard"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/orders"}>
      <ListItemIcon>
        <ShoppingBagOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
  </>
);
