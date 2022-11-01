import Link from "next/link";
import React from "react";
import CONSTANT from "../../constant";
import Icon from "../icons";

const Footer = () => {
  return (
    <footer className="bg-app-primary-900 p-5 border-t border-app-neutral-800 fixed bottom-0 left-0 right-0">
      <div className=" max-w-screen-lg my-0 mx-auto max-md:mx-5 flex justify-between items-center ">
        <div className="flex gap-7">
          {CONSTANT.SOCIAL_LINKS.map((link, index) => (
            <Link href={link.url} key={index}>
              <Icon name={link.icon as any} />
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {CONSTANT.ROUTES.map((route, index) => (
            <Link
              href={route.href}
              className="underline text-xs text-white"
              key={index}
            >
              {route.label}
            </Link>
          ))}
        </div>
        <div className=" text-base font-normal text-white">
          <p>Made By Nandhakumar</p>
          <p>© 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
