import { createSlice } from "@reduxjs/toolkit";
import { movieAPI } from "../../api/api";
// import { movieAPI } from "../../api/api";

const initialState = {
  isloading: false,
  error: null,
  movies: [],
};

const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getMovieDiscoverySuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.movies = action.payload;
    },
    getPopularMovieSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.movies = action.payload;
    },
  },
});

export const getMovieDiscovery = (page) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await movieAPI.getDiscoveryMovie(page);
    dispatch(slice.actions.getMovieDiscoverySuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
};

export const getPopularMovie = (page) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await movieAPI.getPopularMovieList(page);
    dispatch(slice.actions.getPopularMovieSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
};

export default slice.reducer;
