// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import ServicesSlider from "./ServicesSlider";
import Features from "./Features";
import OurStory from "./OurStory";
import Innovations from "./Innovations";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import CompanyUmbrella from "./CompanyUmbrella";
import Team from "./Team";
import AboutDirector from "./AboutDirector";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
// import Header from "./Header";
import Header from "./Header";




const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <ServicesSlider />
              <Features />
              <OurStory />
              <Innovations />
              <Testimonials />
              <Team />
              <FAQ />
              <CompanyUmbrella />
              <AboutDirector />
              <ContactUs />
              <ContactForm />
            </>
          }
        />
        <Route path="/company-umbrella" element={<CompanyUmbrella />} />
        <Route path="/services" element={<ServicesSlider />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about-director" element={<AboutDirector />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
