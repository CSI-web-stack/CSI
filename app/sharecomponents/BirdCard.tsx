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
export default function BirdCard(props: Props) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/${props.image}.webp)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="md:block hidden cursor-pointer h-[180px] xl:h-[300px] w-[calc(88vw)] xl:w-[450px] object-contain p-5 py-10 text-white relative z-50"
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
        <p className="text-[10px] md:text-[14px] mt-3">{props.description}</p>
        {props.link && (
          <div className="w-full text-end mt-3 flex justify-end">
            <Link href={props.link}>
              <p className="bg-white text-black rounded-[30px] px-2 hover:bg-[#dbd5d5] cursor-pointer text-[12px] hover:scale-105">
                Read more
              </p>
            </Link>
          </div>
        )}
      </div>
      <div
        className={`md:hidden mt-[30px] cursor-pointer h-[180px] xl:h-[230px] rounded-[12px] w-[calc(80vw)] z-[9999999] xl:w-[400px] object-contain p-5 text-white relative ${props.bgColor}`}
      >
        <div className="absolute top-4 right-3">
          <Image
            onClick={props.onClickCross}
            src={"/X.webp"}
            height={20}
            width={20}
            alt="x"
          />
        </div>
        <h1 className="mt-2 text-[13px] md:text-[17px]">{props.title}</h1>
        <p className="text-[10px] md:text-[14px] mt-3">{props.description}</p>
        <div className="w-full text-end mt-3 flex justify-end">
          <Link href={props.link}>
            <p className="bg-white text-black rounded-[30px] px-2 hover:bg-[#dbd5d5] cursor-pointer text-[12px] hover:scale-105">
              Read more
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
