import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import { Cart, CategoryProduct, Home, ProductSingle, Search } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement,
    children: [
      { index: true, element: <Home /> },
      { path: "/product/:id", element: <ProductSingle /> },
      { path: "/category/:category", element: <CategoryProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/search/:searchTerm", element: <Search /> },
    ],
  },
]);

export default router;
