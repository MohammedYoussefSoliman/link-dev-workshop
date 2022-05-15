import React from "react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "assets/svgs";

type SocialMediaList = {
  label: string;
  url: string;
  Icon: React.ComponentType<any>;
}[];

const socialMediaList: SocialMediaList = [
  {
    label: "facebook",
    url: "https://www.facebook.com/link.development",
    Icon: FacebookIcon,
  },
  {
    label: "twitter",
    url: "https://twitter.com/linkdevelopment",
    Icon: TwitterIcon,
  },
  {
    label: "youtube",
    url: "https://www.youtube.com/channel/UCBKa7WmbrDiwm8dqNPHQv8A",
    Icon: YoutubeIcon,
  },
];

export default socialMediaList;
