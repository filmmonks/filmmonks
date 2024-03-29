import "./App.css";
import Home from "./components/Page/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";

import "./index.css";
import { useEffect, useState } from "react";
// import ScrollToTop from "react-scroll-up";

import video from "./Assets/FILM MONKS.mp4";
// import gif from "./Assets/FILM MONKS logo (1).gif";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Page/Contact/Contact";
import NotFound from "./components/Shared/NotFound/NotFound";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import Article from "./components/Page/Article/Article";
import AllPhotosGalary from "./components/Page/PhotoGalary/AllPhotosGalary";
import AllWorkTimeline from "./components/Page/Timeline/AllWorkTimeline";

import SliverJublie from "./components/Page/Article/SliverJublie";
import BalanceArt from "./components/Page/Article/BalanceArt";
import AllRecentWorks from "./components/Page/RecentWorks/AllRecentWorks";

function App() {
  const location = useLocation();
  const currentPathname = location.pathname;
  const parts = currentPathname.split("/");
  const articleId = parts[parts.length - 1];
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
            {/* <img src={gif} alt="logo"/> */}
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
            <Route path="/work-timeline/:id" element={<Article />} />
            <Route path="/contact" element={<Contact />}></Route>
            {/* <Route path="/article25" element={<Article />}></Route> */}
            <Route path="/balancing-art" element={<BalanceArt />}></Route>
            <Route path="/silver-jublie" element={<SliverJublie />}></Route>
            <Route path="/monks-galary" element={<AllPhotosGalary />}></Route>
            <Route path="/work-timeline" element={<AllWorkTimeline />}></Route>
            <Route path="/recent-works" element={<AllRecentWorks />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <ScrollToTop />
          {location.pathname !== "/contact" &&
            location.pathname !== "/article25" &&
            location.pathname !== "/balancing-art" &&
            location.pathname !== "/silver-jublie" &&
            location.pathname !== "/monks-galary" &&
            location.pathname !== "/recent-works" &&
            location.pathname !== "/work-timeline" &&
            location.pathname !== `/work-timeline/${articleId}` && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;
