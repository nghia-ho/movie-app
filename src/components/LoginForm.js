import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useAuth } from "../contexts/AuthContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  bgcolor: "primary",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  border: "1px solid black",
  padding: "20px",
};

function LoginForm() {
  const [username] = useState("honghia");
  const [password] = useState("123");
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    navigate(from, { replace: true });
    auth.signin(username);
  };

  const handleClose = () => {
    navigate("/");
  };
  return (
    <Box sx={style}>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper>
            <Box sx={style} component="form" gap={2}>
              <Typography variant="h4" component="div" textAlign="center">
                Login
              </Typography>
              <TextField
                disabled
                label="Username"
                default="user"
                value={username}
                sx={{ m: 1, width: "320px" }}
              />
              <FormControl sx={{ m: 5 }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  disabled
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  sx={{ m: 1, width: "320px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button onClick={handleLogin} sx={{ mb: 4 }} variant="contained">
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </Box>
  );
}

export default LoginForm;
