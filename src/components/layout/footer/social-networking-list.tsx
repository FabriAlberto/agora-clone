import React from "react";
import FacebookIcon from "../../../../public/facebook.svg";
import InstagramIcon from "../../../../public/instagram.svg";
import SpotifyIcon from "../../../../public/spotify.svg";
import YoutubeIcon from "../../../../public/youtube.svg";
import MediaIcon from "../../../../public/medium.svg";
import LinkedinIcon from "../../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const socialNetworking = [
  {
    src: FacebookIcon,
    alt: "facebook icon",
    path: "https://www.facebook.com/AgoraPartnerships",
  },
  {
    src: InstagramIcon,
    alt: "instagram icon",
    path: "https://www.instagram.com/agora_2030/",
  },
  {
    src: MediaIcon,
    alt: "medium icon",
    path: "https://medium.com/@AgoraPartnerships",
  },
  {
    src: LinkedinIcon,
    alt: "linkedin icon",
    path: "https://www.linkedin.com/company/agora-partnerships/",
  },
  {
    src: SpotifyIcon,
    alt: "spotify icon",
    path: "https://open.spotify.com/show/2ejv4LsiSWT9GsFnnHsHZc?si=8f23d80250c54fb6&nd=1",
  },

  {
    src: YoutubeIcon,
    alt: "youtube icon",
    path: "https://www.youtube.com/channel/UCHourQ5NcP4S-jsA2fvBmEA",
  },
];
const SocialNetworkingList = () => {
  return (
    <div className="w-6/12 ">
      <div className="flex w-full flex-wrap gap-6 ">
        {socialNetworking.map((item) => {
          return (
            <Link href={item.path} key={item.path} target="_blank">
              <Image width={28} height={28} src={item.src} alt={item.alt} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialNetworkingList;
