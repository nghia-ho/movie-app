import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function MainHeader() {
  const { logout } = useAuth();
  let navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            width="40%"
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Logo />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              MovieLix
            </Typography>

            <Link
              component={RouterLink}
              to={`/movie`}
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              color="inherit"
            >
              <Typography variant="h6" component="div">
                Movie
              </Typography>
            </Link>

            <Link
              component={RouterLink}
              to={`/tv`}
              variant="subtitle2"
              sx={{ fontWeight: 600 }}
              color="inherit"
            >
              <Typography variant="h6" component="div">
                TV Shows
              </Typography>
            </Link>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            width="20%"
          >
            <Typography variant="h6" color="inherit" component="div">
              Logout
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() =>
                logout(() => {
                  navigate("/login");
                })
              }
            >
              <ExitToAppIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
