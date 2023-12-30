import Navbar from "./components/Navbar.jsx";

import { Route, Routes } from "react-router-dom";
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
