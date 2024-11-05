import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

const App = () => {
  const[orderPopup, setOrderPopup] = React.useState (false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='bg-pink-200 duration-200'>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero />
    <Products />
    <TopProducts />
    <Banner />
    <Subscribe />
    <Products />
    <Testimonials />
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
};

export default App;