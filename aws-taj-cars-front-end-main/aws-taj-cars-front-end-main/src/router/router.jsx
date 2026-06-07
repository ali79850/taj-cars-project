import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Home from "../components/home";
import CarList from "../components/carListing";
import SingleCarPage from "../components/SingleCarPage";
import ScrollToTop from "../components/ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<CarList />} />
        <Route path='/car/:id' element={<SingleCarPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
