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
    <div ref={sliderRef} className="fader h-screen relative">
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
