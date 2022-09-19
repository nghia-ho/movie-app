import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";

import MainHeader from "./MainHeader";

function BlankLayout() {
  return (
    <>
      <Stack sx={{ minHeight: "100vh" }}>
        <MainHeader />

        <Outlet />

        <Box sx={{ flexGrow: 1 }} />

        <MainFooter />
      </Stack>
      );
    </>
  );
}

export default BlankLayout;
