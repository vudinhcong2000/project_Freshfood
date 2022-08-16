import Header from './components/Header';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import Footer from './components/Footer';
import FoodMenu from './components/FoodMenu';
import Testimonial from './components/Testimonial';
import React from "react";
import Aos from 'aos';
import ScrollTop from "./components/ScrollTop";
function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 600,
     
    })
  },[])
  return (
    <>
      <ScrollTop/>
      <Header/>
      <SectionHome/>
      <SectionAbout/>
      <FoodMenu/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
