import "./App.css";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import { createTheme } from "@mui/material/styles";
import "./index.css";

function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
