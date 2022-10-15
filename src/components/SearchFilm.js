import React, { useState } from "react";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { movieAPI } from "../api/api";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SearchFilm({ handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(searchQuery);
    // dispatch();
    navigate("/search");
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid white",
        backgroundColor: "#EEF2E2",
      }}
    >
      <form onSubmit={onSubmit}>
        <TextField
          value={searchQuery}
          placeholder="Search by name"
          onChange={(event) => setSearchQuery(event.target.value)}
          size="small"
          sx={{
            width: "100%",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  color="primary"
                  aria-label="search by name"
                  variant="contained"
                  size="large"
                  component="a"
                  sx={{ maxWidth: 100, my: 1 }}
                  onClick={onSubmit}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
}

export default SearchFilm;
