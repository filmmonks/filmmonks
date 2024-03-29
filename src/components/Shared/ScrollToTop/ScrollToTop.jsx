import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // show button when user scrolls down 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // scroll back to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button className="hover:scale-110 duration-1000 ease-in-out" onClick={scrollToTop}>
          <img
            style={{ width: "20px" }}
            src="https://pixlok.com/wp-content/uploads/2021/10/Up-Arrow-0s8m3s.png"
            alt="arrow"
          />
          {/* <BsArrowUpCircle /> */}
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
