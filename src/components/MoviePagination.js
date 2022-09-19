import { Pagination } from "@mui/material";
import React from "react";

const MoviePagination = ({ setPage }) => {
  const handlePage = (e, page) => {
    setPage(page);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "25px",
      }}
    >
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        size="large"
        onChange={(e, value) => handlePage(e, value)}
      />
    </div>
  );
};

export default MoviePagination;
