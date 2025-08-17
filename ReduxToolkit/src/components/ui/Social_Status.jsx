import React from "react";
import Heading from "../common/Heading";
import {
  INSTRAGRM_ICON,
  WIFI_ICON,
  LINKDIN_ICON,
  PRITTER_ICON,
} from "../../assets/svg/social_icon";

function Social_Status() {
  const img = [
    { img: "public/images/hero-img-01.jpg" },
    { img: "public/images/hero-img-02.jpg" },
    { img: "public/images/hero-img-03.jpg" },
  ];

  return (
    <div className=" bg-[#dfdccf]">
      <div className="grid  grid-cols-3 px-40 gap-5 relative -bottom-32 ">
        {img.map((item, i) => (
          <img
            key={i}
            src={item.img}
            alt=""
            className={i === 1 ? "relative bottom-8" : ""}
          />
        ))}
      </div>
      <div
        className="
    h-[400px] w-full
    bg-[#d2ccb6]
    bg-[url('/images/footer-bg.png')]
    bg-cover bg-center"
      >
        <div className="pt-40 flex justify-evenly ">
          <Heading
            text={"Over 30K people in my "}
            text2={<span className="text-[#93835f]">Network</span>}
            customClass={"text-[56px] w-[550px] leading-16"}
          />
          <div className="flex gap-10 text-center">
            <div>
              <INSTRAGRM_ICON />
              <p className="font-bold text-md pt-4">12k+</p>
            </div>
            <div>
              <WIFI_ICON />
              <p className="font-bold text-md pt-4">8k+</p>
            </div>
            <div>
              <LINKDIN_ICON />
              <p className="font-bold text-md pt-4">13k+</p>
            </div>
            <div>
              <PRITTER_ICON />
              <p className="font-bold text-md pt-4">09k+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social_Status;
