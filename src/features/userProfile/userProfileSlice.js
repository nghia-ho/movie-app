import { createSlice } from "@reduxjs/toolkit";
// import { movieAPI } from "../../api/api";

const initialState = {
  isloading: false,
  error: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default slice.reducer;
