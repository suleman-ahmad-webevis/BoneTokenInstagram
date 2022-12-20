import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import { ThemeProvider } from "styled-components";
import "./App.css";
//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//ComponentsAndPages
import Header from "./components/Header/Header";
import NewFooter from "./components/Footer/NewFooter";
import ProductsList from "./Pages/Product/Products";
import CartList from "./Pages/ShoppingCart/CartList";
import ProductDetail from "./Pages/Product/ProductsDetail";
import FavouritesList from "./Pages/ShoppingCart/FavouritesList";
import NotFound from "./Pages/404/NotFound";
import ToEarn from "./Pages/ToEarn/ToEarn";
import Faq from "./Pages/Faq/Faq";
import MyDogs from "./Pages/MyDogs/MyDogs";
import CustomerService from "./Pages/CustomerService/CustomerService";
import CustomerDelivery from "./Pages/CustomerDelivery/CustomerDelivery";
import Tokenomics from "./Pages/Tokenomics/Tokenomics";
import { PrivateRouteCheckout } from "./utils/PrivateRoutes";
import RecentlyViewedProducts from "./components/ProductsComponent/RecentlyViewed";
import DogShowsPage from "./Pages/DogShowSPage/DogShowsPage";
import Blogs from "./Pages/Blogs/Blogs";
import InstagramHandler from "./components/ProductDetail/InstagramHandler";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <Router>
          <GlobalStyles />
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" exact element={<ProductsList />} />
            <Route path="/products" exact element={<ProductsList />} />
            <Route
              path="/products/productdetail/:id"
              exact
              element={<ProductDetail />}
            />
            <Route path='/products/recently-viewed' exact element={< RecentlyViewedProducts />} />
            <Route element={<PrivateRouteCheckout />}>
              <Route path="/customerdelivery" element={<CustomerDelivery />} />
            </Route>
            <Route path="/checkout" exact element={<CartList />} />
            <Route path="/instagramhandler" exact element={<InstagramHandler />} />
            <Route path="/favourites" exact element={<FavouritesList />} />
            <Route path="/toEarn" exact element={<ToEarn />} />
            <Route path="/faq" exact element={<Faq />} />
            <Route
              path="/customerService"
              exact
              element={<CustomerService />}
            />
            <Route path="/mydogs" exact element={<MyDogs />} />
            <Route path="/dogshows" exact element={<DogShowsPage />} />
            <Route path="/blogs" exact element={<Blogs />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          <NewFooter />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
