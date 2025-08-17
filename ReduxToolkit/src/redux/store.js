import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog.slice"; // make sure this path is correct

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
