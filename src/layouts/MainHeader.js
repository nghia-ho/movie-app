import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function MainHeader() {
  const { username } = useAuth();
  let navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
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

          <Box sx={{ flexGrow: 1 }} />
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
          <Box sx={{ flexGrow: 1 }} />

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
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6" color="inherit" component="div">
            Welcome {username}!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
