import Button from "./button";
import AppStoreBadge from "../../assets/svg/appstore-badge.svg";
import PlayStoreBadge from "../../assets/images/google-play-badge.avif";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

interface FooterLinksTypes {
  title: string;
  linkPath: string;
}

interface SocialLinksTypes {
  title: string;
  icon: ReactElement;
  linkURL: string;
}

const footerLinks: FooterLinksTypes[] = [
  {
    title: "FAQ",
    linkPath: "/faq",
  },
  {
    title: "Terms and Condition",
    linkPath: "/terms-and-condition",
  },
  {
    title: "Privacy Policy",
    linkPath: "privacy-policy",
  },
];

const socialLinks: SocialLinksTypes[] = [
  {
    title: "facebook",
    icon: <BsFacebook />,
    linkURL: "/",
  },

  {
    title: "linkedin",
    icon: <BsLinkedin />,
    linkURL: "/",
  },

  {
    title: "instagram",
    icon: <BsInstagram />,
    linkURL: "/",
  },

  {
    title: "twitter(X)",
    icon: <BsTwitterX />,
    linkURL: "/",
  },

  {
    title: "pintrest",
    icon: <BsPinterest />,
    linkURL: "/",
  },

  {
    title: "youtube",
    icon: <BsYoutube />,
    linkURL: "/",
  },

  {
    title: "tiktok",
    icon: <BsTiktok />,
    linkURL: "/",
  },
];

const Footer = () => {
  const date: Date = new Date();
  const currentYear: number = date.getFullYear();

  return (
    <>
      <footer className="py-[2rem] bg-white">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <div className="flex lg:flex-row flex-col gap-5 pb-10 border-b border-b-gray-300">
            <div className="mr-auto">
              <div className="flex gap-3 items-center">
                <Button
                  bgVariant="bg-secondary-0"
                  text="Log In"
                  color="text-white"
                  hover="hover:bg-gray-800 duration-200 ease-in"
                  linkURL="/"
                />

                <Button
                  bgVariant="bg-secondary-0"
                  text="Sign Up"
                  color="text-white"
                  hover="hover:bg-gray-800 duration-200 ease-in"
                  linkURL="/"
                />
              </div>
            </div>

            <div>
              <div className="flex gap-1 items-center">
                <a href="/" className="no-underline outline-none">
                  <div className="w-fit h-[45px] overflow-hidden rounded-md">
                    <img
                      src={AppStoreBadge}
                      className="w-full h-full object-cover"
                      alt="appstore badge button"
                    />
                  </div>
                </a>

                <a href="/" className="no-underline outline-none">
                  <div className="w-fit h-[65px] overflow-hidden rounded-md">
                    <img
                      src={PlayStoreBadge}
                      className="w-full h-full object-cover"
                      alt="Play store badge button"
                    />
                  </div>
                </a>
              </div>

              <div className="mt-1 text-[12px] font-poppins text-gray-500">
                Apple and the Apple Logo are trademarks of Apple Inc. <br />{" "}
                Google Play and the Google Play logo are trademarks of <br />{" "}
                Google LLC.
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex md:flex-row flex-col gap-5 md:items-center">
              <div className="mr-auto">
                <div className="flex gap-3 items-center">
                  {footerLinks.map((data, index) => {
                    const { linkPath, title } = data;

                    return (
                      <Link
                        to={linkPath}
                        key={index}
                        className="no-underline hover:underline font-poppins text-sm text-secondary-0"
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex gap-5 items-center">
                  {socialLinks.map((data, index) => {
                    const { icon, linkURL } = data;

                    return (
                      <Link
                        to={linkURL}
                        key={index}
                        className="no-underline font-poppins text-xl text-secondary-0"
                      >
                        {icon}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 text-[12px] text-gray-500 font-poppins">
                  copyright &copy; {currentYear}. R4M. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
