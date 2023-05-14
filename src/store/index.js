import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./action/sidebar-slice";
import categoryReducer from "./action/category-slice";
import productReducer from "./action/product-slice";
import cartReducer from "./action/cart-slice";
import searchReducer from "./action/search-slice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
