import { Typography, Link } from "@mui/material";

function MainFooter() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        hohohoho.
      </Link>
    </Typography>
  );
}

export default MainFooter;
