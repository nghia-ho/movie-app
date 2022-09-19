import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

export default function MainLayout() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <MainHeader />
      </Grid>
      <Grid item xs={12} mt={6}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <MainFooter />
      </Grid>
    </Grid>
  );
}
