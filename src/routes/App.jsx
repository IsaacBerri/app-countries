import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import "../style/App.css";

function App() {

  return (
    <main className="container">
      <Navbar/>
      <Home/>
      <Footer/>
    </main>
  );
}

export default App;