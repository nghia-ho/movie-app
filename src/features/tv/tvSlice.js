import { createSlice } from "@reduxjs/toolkit";
import { tvAPI } from "../../api/api";

const initialState = {
  isloading: false,
  error: null,
  tvShows: [],
};

const slice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    startLoading(state) {
      state.isloading = false;
    },
    hasError(state, action) {
      state.isloading = false;
      state.error = action.payload;
    },
    getTvDiscoverySuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tvShows = action.payload;
    },
    getTvPopularSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tvShows = action.payload;
    },
  },
});

export const getTvDiscovery = (page) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await tvAPI.getDiscoveryTv(page);
    dispatch(slice.actions.getTvDiscoverySuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
};
export const getTvPopular = (page) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await tvAPI.getPopularTvList(page);
    dispatch(slice.actions.getTvPopularSuccess(response.data));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
};

export default slice.reducer;
