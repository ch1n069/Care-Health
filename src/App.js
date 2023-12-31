import Navbar from "./components/Navbar.jsx";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
