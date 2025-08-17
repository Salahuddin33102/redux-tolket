import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

function Passions({ product }) {
  return (
    <div className="bg-[#dfdccf]  w-[300px] h-[192px] relative text-center p-5">
      <div className="border-2 bg-[#dfdccf] border-[#aca07d] w-fit p-3 rounded-full absolute  bottom-35 left-25">
        <div className="bg-[#d2ccb6] p-4 rounded-full">
          {product.icon}
          {/* <MARKETING /> */}
        </div>
      </div>
      <Heading text={product.title} customClass={"pt-14"} />
      <Paragraph text={product.para} />
    </div>
  );
}

export default Passions;
