import React from 'react';
import Slider from 'react-slick';


const TestimonialData = [
  {
    id: 1,
    name: "Tega",
    text: "i'm in love with the L16 selfiestick tripod. It's so convenient and easy to use",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Tega",
    text: "i'm in love with the L16 selfiestick tripod. It's so convenient and easy to use",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Tega",
    text: "i'm in love with the L16 selfiestick tripod. It's so convenient and easy to use",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Tega",
    text: "i'm in love with the L16 selfiestick tripod. It's so convenient and easy to use",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoPLaySpeed: 2000,
  CssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      setting: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlides: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] max-auto'>
          <p data-aos= "fade-up" className='text-sm text-pink-600'>Customer Feedback</p>
          <h1 data-aos= "fade-up" className='text-3xl font-bold'>Reviews</h1>
          <p data-aos= "fade-up" className='text-xs text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nulla!</p>
        </div> 

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
        <Slider {...settings}>{
          TestimonialData.map((data) =>(
            <div className='my-6'>
            <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
            dark:bg-black bg-pink-600 relative'>
              <div className='mb-4'>
                <img src={data.img} alt=""className='rounded-full w-20 h-20' />
              </div>
              <div className='flex flex-col items-center gap-4'>
                <div className='space-y-3'>
                <p className='text-xs text-pink-400'>{data.text}</p>
                <h1 className='text-xl font-bold text-white dark:text-light'>{data.name}</h1>
                </div>
              </div>
              <p className='text-pink-400 text-9xl font serif absolute top-0 right-0'>
                ,,
              </p>
              </div>
              </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  )
};

export default Testimonials;
