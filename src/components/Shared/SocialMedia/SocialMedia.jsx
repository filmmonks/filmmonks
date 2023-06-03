import React from "react";

import { Link } from "react-router-dom";

import fb from "../../../Assets/SocialMedia/5305154_fb_facebook_facebook logo_icon 3.png";
import youtube from "../../../Assets/SocialMedia/2559760_media_social_video_youtube_icon 2.png";
import linkedin from "../../../Assets/SocialMedia/2986200_linkdin_logo_media_social_icon 2.png";


const SocialMedia = ({ style }) => {
  return (
    <div style={style}>
      <p className="link link-hover text-xl my-5 mx-2">
        <Link to="https://www.facebook.com/filmmonksarthouse" target="_blank">
          {" "}
          <img src={fb} alt="" />
        </Link>
      </p>
      <p className="link link-hover text-xl my-5 mx-2">
        <Link to="https://www.youtube.com/@filmmonks" target="_blank">
          {" "}
          <img src={youtube} alt="" />
        </Link>
      </p>
      <p className="link link-hover text-xl my-5 mx-2">
        <Link
          to="https://www.linkedin.com/company/91148823/admin/"
          target="_blank"
        >
          {" "}
          <img src={linkedin} alt="" />
        </Link>
      </p>
    </div>
  );
};

export default SocialMedia;
