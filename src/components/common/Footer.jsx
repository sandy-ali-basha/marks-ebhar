import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// assets
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section classNameName="py-10 sm:pt-16 w-full lg:pt-24 absolute bottom-0 z-10">
      <div classNameName="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between text-white">
          <ul className="flex-shrink-0 flex items-center ">
            <Link href="/" title="" className="px-2 pe-5">
              <img classNameName="" src={Linkedin} alt="" />
            </Link>
            <Link href="/" title="" className="px-2">
              <img classNameName="" src={Instagram} alt="" />
            </Link>
            <Link href="/" title="" className="px-2">
              <img classNameName="" src={Twitter} alt="" />
            </Link>
            <p className="px-2">All rights reserved to Ebhar 2023</p>
          </ul>
          <div className="flex-shrink-1 flex items-center">
            <Link href="/" title="" className="pe-5">
              <p>Terms of Use</p>
            </Link>
            <Link href="/" title="" className="pe-5">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/" title="" className="pe-5">
              <p>Legal Notice</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
