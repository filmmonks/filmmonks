import React from "react";
import Iframe from "react-iframe";
import { MdEmail } from "react-icons/md";
import img from "../../../Assets/Footer/footer.png";
import {
  BsTelephoneFill,
  BsFacebook,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-20">
      <footer
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
        className=""
      >
        <div className="flex flex-col lg:flex-row lg:p-28 text-[#fff]">
          <div className="lg:pl-24">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223943459!2d90.27919449966463!3d23.78088745514968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1677785620904!5m2!1sen!2sbd"
              // width="509px"
              // height="316px"
              id=""
              className="lg:w-[509px] h-[316px]"
              display="block"
              position="relative"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:px-14">
            <div className="mx-10">
              <span className=" text-[#F45656] font-bold text-xl">
                Head Quarter
              </span>
              <p className="link link-hover font-bold my-3">Connect Us</p>
              <p className="link link-hover text-[#B19B9B] mb-4">
                Office Address: House 12,
                <br /> Block C, Future Town <br /> Housing, Mohammadpur,
                <br /> Dhaka-1207
              </p>
              <p className="link link-hover text-[#B19B9B] flex items-center my-2">
                <MdEmail className="mr-3 text-2xl text-[#fff]" />
                jayanto.k.kundu@gmail.com
              </p>
              <p className="link link-hover text-[#B19B98] flex items-center">
                <BsTelephoneFill className="mr-3 text-[#fff]" />
                01705099380
              </p>
            </div>
            <div className="mx-10 mt-8 flex flex-col lg:items-center">
              <p className="link link-hover font-bold">Follow Us</p>
              <p className="link link-hover text-xl my-3">
                <BsFacebook />
              </p>
              <p className="link link-hover text-xl my-3">
                <BsYoutube />
              </p>
              <p className="link link-hover text-xl my-3">
                <BsInstagram />
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#000] px-[200px] text-[#fff] py-5">
          <p className="mr-40">Dhaka, Bangladesh </p>
          <p>&copy; 2023 Filmmonks. All Rights Reserved </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
