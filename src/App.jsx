import { Routes, Route } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// Import Module Page
import About from "./about/Page";
import Pricing from "./pricing/Page";
import Contact from "./contact/Page";
import Courses from "./courses/Page";
import Home from "./home/Page";

const App = () => {
  return (
    <>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
