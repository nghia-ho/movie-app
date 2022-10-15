import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import tvReducer from "../features/tv/tvSlice";
import userReducer from "../features/userProfile/userProfileSlice";
const rootReducer = {
  movie: movieReducer,
  tv: tvReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
