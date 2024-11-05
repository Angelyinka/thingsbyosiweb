import React from 'react';
import Img1 from "../../assets/ProductImg/img1.jpg";
import Img2 from "../../assets/ProductImg/img2.jpg";
import Img3 from "../../assets/ProductImg/img3.jpg";
import Img4 from "../../assets/ProductImg/img4.jpg";
import Img5 from "../../assets/ProductImg/img5.jpg";
import { FaStar } from 'react-icons/fa6';



const ProductsData = [
   {
    id: 1,
    img: Img1,
    title: "L16 selfiestick Tripod",
    rating: 5.0,
    aosDelay: "0",
   },
   {
    id: 2,
    img: Img2,
    title: "L16 selfiestick Tripod",
    rating: 5.0,
    aosDelay: "0",
   },
   {
    id: 3,
    img: Img3,
    title: "L16 selfiestick Tripod",
    rating: 5.0,
    aosDelay: "0",
   },
   {
    id: 4,
    img: Img4,
    title: "L16 selfiestick Tripod",
    rating: 5.0,
    aosDelay: "0",
   },
   {
    id: 5,
    img: Img5,
    title: "L16 selfiestick Tripod",
    rating: 5.0,
    aosDelay: "0",
   },
];

const Products = () => {
  return ( 
  <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] max-auto'>
          <p data-aos= "fade-up" className='text-sm text-pink-600'>Bestselling Products</p>
          <h1 data-aos= "fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos= "fade-up" className='text-xs text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nulla!</p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          place-items-center gap-5'>
           {/* Card section */}
           {ProductsData.map((data) => (
            <div
             data-aos= "fade-up"
             data-aos-delay={data.aosDelay}
             key={data.id}
            className='space-y-3'>
              <img src={data.img} alt=""
              className='h-[220px] w-[150px] object-cover rounded-md' />
              <div>
                <h3 className='font-semibold'>{data.title}</h3>
                <div className='flex items-center gap-1'>
                <FaStar className='text-pink-400'/>
                <span>{data.rating}</span>
                </div>
              </div>
            </div>
           ))}
          </div>
          {/* View all button */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-pink-600
            text-black py-1 px-5 rounded-md'>See More</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Products;
