import { Box, IconButton } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import MovieFilterTwoToneIcon from "@mui/icons-material/MovieFilterTwoTone";

const Logo = ({ disableLink = true, sx }) => {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <IconButton>
        <MovieFilterTwoToneIcon color="error" />
      </IconButton>
    </Box>
  );
  if (!disableLink) {
    return <>{logo}</>;
  }
  return <Link to="/">{logo}</Link>;
};

export default Logo;
