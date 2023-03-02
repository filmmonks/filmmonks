// import { Box } from "@mui/material";
// import React from "react";

// const Banner = () => {
//   return (
//     <Box>
//       {/* <img
//         style={{ width: "100%", height: "100vh" }}
//         src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
//         alt=""
//       /> */}
//     </Box>
//   );
// };

// export default Banner;
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../../Styles/Banner.css";
import banner from "../../../Assets/Banner/banner.png";

const images = [banner, banner, banner];

const Banner = () => {
  const [opacities, setOpacities] = React.useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <div ref={sliderRef} className="fader h-screen">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="fader__slide"
          style={{ opacity: opacities[idx] }}
        >
          <img className="" src={src} alt="banner" />
        </div>
      ))}
    </div>
  );
};
export default Banner;
