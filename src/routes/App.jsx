import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import CreateCountry from "../pages/CreateCountry";
import "../style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <Navbar />
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
