import React, { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
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
        <button onClick={scrollToTop}>
          <BsArrowUpCircle />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
