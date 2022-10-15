import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import logoImg from "../logo.png"; //import any name

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      {/* sx props with pread operator, copy and overwrite*/}
      <img src={logoImg} alt="logo" width="100%" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
