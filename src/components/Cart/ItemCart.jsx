import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreamentQTY,
  increamentQTY,
  removeFromCart,
} from "../../redux/CartSlice";
import { toast } from "react-hot-toast";

const ItemCart = ({ id, name, rating, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md mb-3 p-4">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, rating, price, img, qty }));
          toast(`${name} Removed!`, {
            icon: "👏",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h3 className="text-gray-800 font-bold">{name}</h3>

        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decreamentQTY({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-white hover:bg-green-500 hover:border-none p-1 transition-all text-xl ease-linear cursor-pointer   "
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(increamentQTY({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-white hover:bg-green-500 hover:border-none p-1 transition-all text-xl ease-linear cursor-pointer   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
