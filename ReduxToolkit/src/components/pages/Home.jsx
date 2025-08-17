import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import { APP_LOGO } from "../../assets/svg/navbar_icon";
import Social_Status from "../ui/Social_Status";
import Feature_blog from "../ui/FeatureBlog";
import Passions from "../ui/Passions";
import { MARKETING } from "../../assets/svg/passions_icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../../redux/features/blog.slice";

function Home() {
  const dispatch = useDispatch();
  const { featured, latest, passions, loading } = useSelector(
    (state) => state.blog
  );

  dispatch(fetchBlogs()).then((res) => {
    console.log("Fetched Blogs:", res);
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-[#dfdccf] h-full">
      <div className="mx-auto w-[50%] pt-30 ">
        <APP_LOGO />

        <Heading
          text={"Welcome to My Journey of Discovery and Growth"}
          customClass={"text-5xl text-center  font-semibold leading-16 pt-8"}
        />
        <Paragraph
          text={
            "A marketing professional passionate about exploring the world, embracing technology, enhancing personal growth, and nurturing wellness."
          }
          customClass={"font-base text-center py-8 px-24"}
        />
        <Button
          text={"GET INSPIRED"}
          customClass={"bg-[#93835f] px-10 py-3 text-white block mx-auto"}
        />
      </div>
      <Social_Status />
      <Heading
        text={"My Featured "}
        customClass={"pt-20 text-center text-[56px] py-10"}
        text2={<span className="text-[#93835f]">Blog</span>}
      />
      <div className="grid grid-cols-3 mx-auto place-items-center w-fit gap-5">
        {featured.map((item, i) => (
          <Feature_blog key={i} product={item} type={"feature"} />
        ))}
      </div>
      <div className="bg-[#d2ccb6] py-20">
        <Heading
          text={"Explore My  "}
          customClass={" text-center text-[56px] pb-20"}
          text2={<span className="text-[#93835f]">Passions</span>}
        />
        <div className="grid grid-cols-4 place-items-center w-fit mx-auto gap-5 pb-10">
          {passions.map((item, i) => (
            <Passions key={i} product={item} />
          ))}
        </div>
        <Button
          text={"VIEW ALL BLOGS"}
          customClass={"bg-[#93835f] px-10 py-3 text-white block mx-auto  "}
        />
      </div>
      <Heading
        text={"Latest "}
        customClass={" text-center text-[56px] py-20"}
        text2={<span className="text-[#93835f]">Blog</span>}
      />
      <div className="grid grid-cols-3 place-items-center w-fit mx-auto gap-5 pb-20">
        {latest.map((item, i) => (
          <Feature_blog key={i} product={item} type={"latest"} />
        ))}
      </div>
      <Button
        text={" ALL BLOGS"}
        customClass={"bg-[#93835f] px-10 py-3 text-white block mx-auto  "}
      />
    </div>
  );
}

export default Home;
