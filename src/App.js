import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Rooms from "./components/Rooms.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Services from "./components/Services.jsx";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import MoreServices from "./components/MoreServices.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
