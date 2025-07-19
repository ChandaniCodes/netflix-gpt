import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice.js";
import movieReducer from "../utils/movieSlice.js";

const appStore = configureStore({
  reducer: { user: userReducer, movie: movieReducer },
});
export default appStore;
