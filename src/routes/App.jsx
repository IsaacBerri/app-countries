import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import CreateCountry from "../pages/CreateCountry";
import "../style/App.css";
import { useEffect } from "react";

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <BrowserRouter>
      <main className="container">
        <Navbar />
        <ScrollToTop/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-country" element={<CreateCountry />} />
        {/* <Route path="/manage-country" element={<ManageCountry />} /> */}
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
