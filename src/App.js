import { RingLoader } from "react-spinners";
import "./App.css";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";

import "./index.css";
import { useEffect, useState } from "react";
// import ScrollToTop from "react-scroll-up";

import video from "./Assets/FILM MONKS.mp4";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Page/Contact/Contact";
import NotFound from "./components/Shared/NotFound/NotFound";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import Banner from "./components/Page/Banner/Banner";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            {/* <video src={video} autoPlay loop muted /> */}
          </div>
        </div>
      ) : (
        <div setLoading="false">
          <nav>
            <Navbar />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <ScrollToTop />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
