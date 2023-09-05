import React, { Fragment, useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartToggle, setCartToggle] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalQty = cart.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalCost = cart.reduce(
    (totalCost, item) => totalCost + item.price * item.qty,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <Fragment>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${
          cartToggle ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between">
          <span className="text-xl font-bold text-gray-800 mb-5">
            My Orders
          </span>

          <IoMdClose
            onClick={() => setCartToggle(false)}
            className="border-2 border-gray-600  text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cart && cart.length > 0 ? (
          cart.map((food) => (
            <ItemCart
              key={food.id}
              id={food.id}
              name={food.name}
              rating={food.rating}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <p className="font-bold text-xl my-5 mx-6">Your cart is empty</p>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">
            Total Items : {totalQty}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : ₹{totalCost}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          {cart && cart.length > 0 ? (
            <button
              onClick={handleCheckout}
              className="w-[90vw] lg:w-[18vw] py-2 px-3 bg-green-500 mb-5 rounded-lg text-white font-bold"
            >
              Checkout
            </button>
          ) : (
            <button
              disabled={true}
              onClick={handleCheckout}
              className="w-[90vw] lg:w-[18vw] py-2 px-3 bg-green-200 mb-5 rounded-lg text-white font-bold"
            >
              Checkout
            </button>
          )}
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setCartToggle(!cartToggle)}
        className={`fixed bottom-10 cursor-pointer right-4 transition-all duration-500 rounded-full text-5xl bg-white p-3 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </Fragment>
  );
};

export default Cart;
