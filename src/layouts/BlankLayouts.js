import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Logo from "../components/Logo";
import { Stack } from "@mui/material";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: "5%",
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
}));

function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="end" alignItems="start">
      <HeaderStyle>
        <Logo sx={{ width: 70, height: 70 }} />
      </HeaderStyle>
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;