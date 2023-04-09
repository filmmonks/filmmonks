import { RingLoader } from "react-spinners";
import "./App.css";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";

import "./index.css";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-up";

import video from "./Assets/FILM MONKS.mp4";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 9000 );
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
            <video src={video} autoPlay loop muted />
          </div>
        </div>
      ) : (
        <div setLoading="false">
          <ScrollToTop showUnder={160}>
            <img
              src="https://milosjanda.github.io/react-scroll-up/img/up_arrow_round.png"
              alt=""
            />
          </ScrollToTop>
          <nav>
            <Navbar />
          </nav>
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
