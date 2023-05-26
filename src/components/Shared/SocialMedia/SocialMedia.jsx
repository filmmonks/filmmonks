import React from "react";

import { Link } from "react-router-dom";

import fb from "../../../Assets/SocialMedia/5305154_fb_facebook_facebook logo_icon 3.png";
import youtube from "../../../Assets/SocialMedia/2559760_media_social_video_youtube_icon 2.png";
import instagram from "../../../Assets/SocialMedia/7693314_instagram_social media_logo_apps_icon 2.png";
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
        <Link to="https://www.instagram.com/filmmonksarthouse/" target="_blank">
          {" "}
          <img src={youtube} alt="" />
        </Link>
      </p>
      <p className="link link-hover text-xl my-5 mx-2">
        <Link to="https://www.youtube.com/channel/filmmonks" target="_blank">
          {" "}
          <img src={instagram} alt="" />
        </Link>
      </p>
    </div>
  );
};

export default SocialMedia;
