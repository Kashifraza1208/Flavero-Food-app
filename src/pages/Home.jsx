import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/Food/FoodItems";
import Cart from "../components/Cart/Cart";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </Fragment>
  );
};

export default Home;
