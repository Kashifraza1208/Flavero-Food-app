import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/CartSlice";
import CategorySlice from "./redux/CategorySlice";
import SearchSlice from "./redux/SearchSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default store;
