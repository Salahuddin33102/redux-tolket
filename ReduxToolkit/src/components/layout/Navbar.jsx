import React from "react";
import { Link } from "react-router-dom";
import {
  INSTAGRAM_ICON,
  FACE_BOOK,
  LINDIN_LOGO,
  PRITTER_LOGO,
} from "../../assets/svg/navbar_icon";
import Button from "../common/Button";

function Navbar() {
  const navlink = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "blog" },
    { name: "About", path: "about" },
    { name: "contact", path: "contact" },
  ];

  return (
    <div className="flex justify-between items-center bg-[#dfdccf] py-4 px-30">
      <img
        width="137"
        height="25"
        src="https://websitedemos.net/lifestyle-blogger-04/wp-content/uploads/sites/1515/2025/02/site-logo.svg"
        className="custom-logo astra-logo-svg cursor-pointer"
        alt="Lifestyle Blogger"
        decoding="async"
      ></img>
      <div className="flex gap-5">
        {navlink.map((item, i) => {
          return (
            <Link
              key={i}
              className="text-base hover:text-[#a68c69] pb-3 hover:border-b-2"
              to={item.path}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-7 cursor-pointer">
        <INSTAGRAM_ICON />
        <FACE_BOOK />
        <LINDIN_LOGO />
        <PRITTER_LOGO />
        <Button
          text={"SUBSCRIBE"}
          customClass={"px-10 py-3 border text-base border-[#a68c69]"}
        />
      </div>
    </div>
  );
}

export default Navbar;
