import React from 'react';
import Image1 from "../../assets/Hero img/selfie.png.png";
import Image2 from "../../assets/Hero img/blackfriday.jpg";
import Image3 from "../../assets/Hero img/deliverynotice.jpg";
import Image4 from "../../assets/Hero img/ImgL16.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Things By Osiahumen",
    description: "Your One-stop shop in Lagos for quality phone accessories to elevate your content creation and everyday lifestyle",
  },
  {
    id: 2,
    img: Image2,
    title: "It's time for Black Friday!",
    description: "All items have been slashed, Don't miss out!",
  },
  {
    id: 3,
    img: Image3,
    title: "Important Announcement",
    description: "Please Read",
  },
  {
    id: 4,
    img: Image4,
    title: "Best-seller this week!",
    description: "The L16 selfiestick Tripod",
  },

];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    bg-gray-100 flex justify-center items-center dark:bg-pink-100 dark:text-black duration-200'>
      {/* Background Pattern */}
      <div className='h-[700px] w-[700px] bg-pink-600 absolute -top-1/2 right-0 rounded-3xl
      rotate-45 -z-9'></div>
      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
             <div className='grid grid-cols-1 sm:grid-cols-2'>
             {/* Text content section */}
              <div
              className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center 
              sm:text-left order-2 sm:order-1 relative z-10'
              >
                <h1 
                data-aos= "zoom-out"
                data-aos-duration= "500"
                data-aos-once="true"
                className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                >
                 {data.title}</h1>
                <p 
                data-aos= "zoom-out"
                data-aos-duration= "500"
                data-aos-once="true"
                className='text-sm'>{data.description}</p
                >
                 <div
                 data-aos= "zoom-out"
                 data-aos-duration= "500"
                 data-aos-once="true"
                 >
                   <button className='bg-gradient-to-r from-pink-400 to bg-pink-600 hover:scale-105
                   duration-200 text-white py-2 px-4 rounded-full'>
                     Order Now
                   </button>
                 </div>
              </div>
              {/* Image section */}
              <div className='order-1 sm:order-2'>
               <div 
               data-aos= "zoom-out"
               data-aos-duration= "500"
               data-aos-once="true"
               className='relative z-10'
               >
                 <img src={data.img} alt="" 
                 className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120
                 object-contain mx-auto'
                 />
               </div>
              </div>
           </div>
          ))}
       <div>
       </div>
       </Slider>
      </div>
    </div>
  )
}

export default Hero
