import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
function Feature_blog({ product, type }) {
  return (
    <div
      className={`w-[381px]   border-2 border-[#93835f] overflow-hidden shadow ${
        type === "latest" ? "mb-0" : "mb-40"
      }`}
    >
      <img
        src={product.img}
        alt=""
        className="w-full h-[330px] object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className={`${type === "latest" ? "p-10" : "p-7"}`}>
        {type === "latest" && (
          <span className="block border-b w-fit mx-auto text-center text-[#998c73] cursor-pointer">
            {product.title}
          </span>
        )}
        <Paragraph
          text={product.para}
          customClass={"text-center pb-5 text-[20px]"}
        />
        {type === "feature" && (
          <Button
            text={product.btn}
            customClass={"block mx-auto text-[#938671] text-base font-semibold"}
          />
        )}
        {type === "latest" && (
          <div className="text-center text-sm cursor-pointer">
            <span>{product.date}</span>
            <span>{product.comet}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feature_blog;
