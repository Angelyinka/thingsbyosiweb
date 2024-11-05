import React from "react";
import Img1 from "../../assets/NewArrival/New1.jpg";
import Img2 from "../../assets/NewArrival/new2.jpg";
import Img3 from "../../assets/NewArrival/new3.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "The Zseries",
    description: "Now in stock",
  },
  {
    id: 2,
    img: Img2,
    title: "The Zseries",
    description: "Now in stock",
  },
  {
    id: 3,
    img: Img3,
    title: "The Zseries",
    description: "Now in stock",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-pink-600">
            New Arrivals
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Now in stock
          </h1>
          <p data-aos="fade-up" className="text-xs text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            nulla!
          </p>
        </div>
        {/* Body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-20 md:gap-5 place-items-center "
        >
          {ProductsData.map((data) => (
            <div 
            data-aos="zoom-in"
            className="rounded-2xl bg-pink-100 hover:bg-black/80
             dark:hover:bg-pink-600 hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4 ">
              {/* Image section  */}
              <div className="h-[100px]">
                <img src={data.img} alt="" 
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 
                duration-300 drop-shadow-md"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
               {/* Star rating */}
               <div className="w-full flex items-center justify-center gap-1">
                <FaStar className="text-pink-400" />
                <FaStar className="text-pink-400" />
                <FaStar className="text-pink-400" />
                <FaStar className="text-pink-400" />
               </div>
               <h1 className="text-xl font-bold">{data.title}</h1>
               <p className="text-pink-400 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
               <button className="bg-pink-600 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4
               group-hover:bg-white group-hover:text-pink-600">
                 Order Now
               </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
