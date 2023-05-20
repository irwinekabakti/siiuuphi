import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Header />
    //     <Sidebar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/product/:id" element={<ProductSingle />} />
    //       <Route path="/category/:category" element={<CategoryProduct />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/search/:searchTerm" element={<Search />} />
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    // </div>

    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
