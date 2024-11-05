import React from 'react';
import footerLogo from "../../assets/footerImg/selfielogo.png";
import Banner from "../../assets/footerImg/footerbg.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaLocationArrow,
  FaMobileAlt,
}from "react-icons/fa";
import { FaTiktok } from 'react-icons/fa6';


const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPostion: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "About Us",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg}
    className='text-black mb-30'>
      <div className='container'>
      <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-30 pt-5'>
        {/* Company details */}
        <div className='py-8 px-4 '>
          <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3
          flex items-center gap-3' > <img src={footerLogo} alt="" 
          className='max-w-[100px]'/></h1>
          <p>Phone accessories store in Lagos,Nigeria.
            Start your content creation journey without breaking the bank.
          </p>
        </div>
        {/* Footerlinks details */}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
          <div>
            <div className='py-8 px-4'>
              <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Our Links</h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:text-pink-800 hover:translate-x-1 duration-300
                    text-gray-200' key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* Social links */}
          <div>
            <div className='flex items-center gap-3 mt-6'>
              <a href="#">
                 <FaInstagram className='text-3xl'/>
              </a>
              <a href="#">
                <FaFacebook className='text-3xl'/>
              </a>
              <a href="#">
                <FaTiktok className='text-3xl'/>
              </a>
            </div>
            <div className='mt-6'>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Ikorodu, Lagos.</p>
              </div>
              <div className='flex items-center gap-3'>
                <FaMobileAlt />
                <p>08116918943</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;
