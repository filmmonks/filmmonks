import React from "react";
import { galleryData } from "./PhotoGalary";
import img1 from "../../../Assets/MonksGalary/AllPhotos/images/8.png";
import img2 from "../../../Assets/MonksGalary/AllPhotos/images/9.png";
import img3 from "../../../Assets/MonksGalary/AllPhotos/images/10.png";
import img4 from "../../../Assets/MonksGalary/AllPhotos/images/11.png";
import img5 from "../../../Assets/MonksGalary/AllPhotos/images/12.png";
import img6 from "../../../Assets/MonksGalary/AllPhotos/images/13.png";
import img7 from "../../../Assets/MonksGalary/AllPhotos/images/14.png";
import img8 from "../../../Assets/MonksGalary/AllPhotos/images/15.png";
import img9 from "../../../Assets/MonksGalary/AllPhotos/images/16.png";
import img10 from "../../../Assets/MonksGalary/AllPhotos/images/17.png";
import img11 from "../../../Assets/MonksGalary/AllPhotos/images/18.png";
import img12 from "../../../Assets/MonksGalary/AllPhotos/images/19.png";
import img13 from "../../../Assets/MonksGalary/AllPhotos/images/20.png";
import img14 from "../../../Assets/MonksGalary/AllPhotos/images/21.png";
import img15 from "../../../Assets/MonksGalary/AllPhotos/images/22.png";
import img16 from "../../../Assets/MonksGalary/AllPhotos/images/23.png";
import img17 from "../../../Assets/MonksGalary/AllPhotos/images/24.png";
import img18 from "../../../Assets/MonksGalary/AllPhotos/images/25.png";
import img19 from "../../../Assets/MonksGalary/AllPhotos/images/26.png";
import img20 from "../../../Assets/MonksGalary/AllPhotos/images/27.png";
import img21 from "../../../Assets/MonksGalary/AllPhotos/images/28.png";
import img22 from "../../../Assets/MonksGalary/AllPhotos/images/29.png";
import img23 from "../../../Assets/MonksGalary/AllPhotos/images/30.png";
import img24 from "../../../Assets/MonksGalary/AllPhotos/images/31.png";
import img25 from "../../../Assets/MonksGalary/AllPhotos/images/32.png";
import img26 from "../../../Assets/MonksGalary/AllPhotos/images/33.png";
import img27 from "../../../Assets/MonksGalary/AllPhotos/images/34.png";
import img28 from "../../../Assets/MonksGalary/AllPhotos/images/35.png";
import img29 from "../../../Assets/MonksGalary/AllPhotos/images/36.png";
import img30 from "../../../Assets/MonksGalary/AllPhotos/images/37.png";
import img31 from "../../../Assets/MonksGalary/AllPhotos/images/38.png";
import img32 from "../../../Assets/MonksGalary/AllPhotos/images/39.png";
import img33 from "../../../Assets/MonksGalary/AllPhotos/images/40.png";
import img34 from "../../../Assets/MonksGalary/AllPhotos/images/41.png";
import img35 from "../../../Assets/MonksGalary/AllPhotos/images/42.png";
import img36 from "../../../Assets/MonksGalary/AllPhotos/images/43.png";
import img37 from "../../../Assets/MonksGalary/AllPhotos/images/44.png";
import img38 from "../../../Assets/MonksGalary/AllPhotos/images/45.png";
import img39 from "../../../Assets/MonksGalary/AllPhotos/images/46.png";
import img40 from "../../../Assets/MonksGalary/AllPhotos/images/47.png";
import img41 from "../../../Assets/MonksGalary/AllPhotos/images/48.png";
import img42 from "../../../Assets/MonksGalary/AllPhotos/images/49.png";
import img43 from "../../../Assets/MonksGalary/AllPhotos/images/50.png";
import img44 from "../../../Assets/MonksGalary/AllPhotos/images/51.png";
import img45 from "../../../Assets/MonksGalary/AllPhotos/images/52.png";
import img46 from "../../../Assets/MonksGalary/AllPhotos/images/53.png";
import img47 from "../../../Assets/MonksGalary/AllPhotos/images/54.png";
const imageData = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
  { id: 10, img: img10 },
  { id: 11, img: img11 },
  { id: 12, img: img12 },
  { id: 13, img: img13 },
  { id: 14, img: img14 },
  { id: 15, img: img15 },
  { id: 16, img: img16 },
  { id: 17, img: img17 },
  { id: 18, img: img18 },
  { id: 19, img: img19 },
  { id: 20, img: img20 },
  { id: 21, img: img21 },
  { id: 22, img: img22 },
  { id: 23, img: img23 },
  { id: 24, img: img24 },
  { id: 25, img: img25 },
  { id: 26, img: img26 },
  { id: 27, img: img27 },
  { id: 28, img: img28 },
  // { id: 29, img: img29 },
  // { id: 30, img: img30 },
  { id: 31, img: img31 },
  { id: 32, img: img32 },
  { id: 33, img: img33 },
  { id: 34, img: img34 },
  { id: 35, img: img35 },
  // { id: 36, img: img36 },
  { id: 37, img: img37 },
  // { id: 38, img: img38 },
  { id: 39, img: img39 },
  { id: 40, img: img40 },
  { id: 41, img: img41 },
  { id: 42, img: img42 },
  { id: 43, img: img43 },
  { id: 44, img: img44 },
  { id: 45, img: img45 },
  { id: 46, img: img46 },
  // { id: 47, img: img47 },
];

const AllPhotosGalary = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:mx-36 lg:gap-10 md:gap-10 gap-10 mx-auto pt-36 pb-12">
      {imageData.map((data) => (
        <div className="lg:w-[380px] w-[300px] mx-auto">
          <img src={data?.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AllPhotosGalary;
