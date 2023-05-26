import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const SocialMedia = ({style}) => {
  return (
    <div style={style}>
      <p className="link link-hover text-xl my-3 mx-2">
        <Link to="https://www.facebook.com/filmmonksarthouse" target="_blank" > <BsFacebook /></Link>
       
      </p>
      <p className="link link-hover text-xl my-3 mx-2">
         <Link to="https://www.instagram.com/filmmonksarthouse/" target="_blank" > <BsInstagram /></Link>
      
       
      </p>
      <p className="link link-hover text-xl my-3 mx-2">
        <Link to="https://www.youtube.com/channel/filmmonks" target="_blank" >  <BsYoutube /></Link> 
      </p>
    </div>
  );
};

export default SocialMedia;
