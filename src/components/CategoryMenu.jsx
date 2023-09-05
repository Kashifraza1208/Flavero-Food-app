import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/CategorySlice";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-bold">Find the best food</h3>
      <div className="my-5 flex overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 mx-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            category === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((cat, index) => (
          <button
            onClick={() => dispatch(setCategory(cat))}
            className={`px-3 py-2 mx-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              category === cat && "bg-green-500 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
