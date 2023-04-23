import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="flex lg:flex-col">
      <p className="link link-hover text-xl my-3 mx-2">
        <BsFacebook />
      </p>
      <p className="link link-hover text-xl my-3 mx-2">
        <BsYoutube />
      </p>
      <p className="link link-hover text-xl my-3 mx-2">
        <BsInstagram />
      </p>
    </div>
  );
};

export default SocialMedia;
