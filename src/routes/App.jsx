import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import CreateCountry from "../pages/CreateCountry";
import "../style/App.css";

function App() {

  return (
    <main className="container">
      {/*<Navbar/>*/}
      {/*<Home/>*/}
      <CreateCountry/>
    </main>
  );
}

export default App;