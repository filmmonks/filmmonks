import { RingLoader } from "react-spinners";
import "./App.css";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";

import "./index.css";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-up";
import logo from "./Assets/Logo/Black Simple YouTube Thumbnail.png";
import video from "./Assets/FILM MONKS.mp4";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#C75846");
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
