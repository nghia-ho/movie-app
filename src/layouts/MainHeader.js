import Logo from "../components/Logo";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useAuth } from "../contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();
  let location = useLocation();

  if (!auth.user) {
    return (
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        display="flex"
        alignItems="center"
      >
        <Link to="/login" state={{ backgroundLocation: location }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              auth.signin(true);
              console.log(auth.user);
            }}
          >
            <AccountCircle />
          </IconButton>
        </Link>
        <Link to="/favorite" state={{ backgroundLocation: location }}>
          <IconButton size="large" color="inherit">
            <BookmarksIcon />
          </IconButton>
        </Link>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: { xs: "none", md: "flex" } }}
      display="flex"
      alignItems="center"
    >
      <IconButton
        size="large"
        color="inherit"
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        <AccountCircle />
      </IconButton>
      <Typography
        variant="body1"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Sign out
      </Typography>
      <Link to="/favorite" state={{ backgroundLocation: location }}>
        <IconButton size="large" color="inherit">
          <BookmarksIcon />
        </IconButton>
      </Link>
    </Box>
  );
}
const MainHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            float: "none",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Logo sx={{ mr: 1, color: "error" }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {'>"< '}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <AuthStatus />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
