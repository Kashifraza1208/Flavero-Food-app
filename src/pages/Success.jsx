import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { PropagateLoader } from "react-spinners";

const Success = () => {
  const { cart } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      {loading && cart.length > 0 ? (
        <PropagateLoader
          className="flex flex-col justify-center items-center h-screen"
          color="#36d7b7"
        />
      ) : (
        <div>
          <h3 className="font-bold text-3xl">Order Successful!</h3>
          <h3>Your order has been successfully placed.</h3>
        </div>
      )}
    </div>
  );
};

export default Success;
