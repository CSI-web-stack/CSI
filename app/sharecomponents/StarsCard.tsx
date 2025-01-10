import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  link: string;
  bgColor: string;
  description: string;
  onClickCross: any;
}
export default function StarsCard(props: Props) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/${props.image}.webp)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="md:block hidden cursor-pointer h-[180px] text-center xl:h-[300px] w-[calc(88vw)] xl:w-[450px] object-contain p-5 py-10 text-[#1F4694] relative z-50"
      >
        <div className="absolute top-10 right-3">
          <Image
            onClick={props.onClickCross}
            src={"/X.webp"}
            height={20}
            width={20}
            alt="x"
          />
        </div>
        <h1 className="mt-4 text-[13px] md:text-[17px]">{props.title}</h1>
        <p
          className={`text-[10px] md:text-[14px] ${
            props.title === "Balance" ? "mt-0" : "mt-3"
          }`}
        >
          {props.description}
        </p>
      </div>
      <div
        className={`md:hidden mt-[30px] cursor-pointer h-[180px] xl:h-[230px] rounded-[12px] w-[calc(80vw)] z-[9999999] xl:w-[400px] object-contain p-5 text-[#1F4694] relative bg-white`}
      >
        <div className="absolute top-4 right-3">
          <Image
            onClick={props.onClickCross}
            src={"/X.webp"}
            height={20}
            width={20}
            style={{
              filter: "brightness(0) saturate(100%)",
            }}
            alt="x"
          />
        </div>
        <h1 className="mt-2 text-[13px] md:text-[17px]">{props.title}</h1>
        <p className="text-[10px] md:text-[14px] mt-3">{props.description}</p>
      </div>
    </>
  );
}
