import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menu.slice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
