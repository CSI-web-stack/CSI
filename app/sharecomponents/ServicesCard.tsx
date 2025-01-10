"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { use, useEffect } from "react";

interface Props {
  rightSideCard?: boolean;
  title: string;
  description: string;
  shortDesc?: string;
}
export default function ServicesCard({
  rightSideCard,
  title,
  description,
  shortDesc,
}: Props) {
  const pathname = usePathname();
  return (
    <div
      data-aos={!rightSideCard ? "fade-right" : "fade-left"}
      className={`w-[calc(90vw)] md:w-[calc(40vw)] xl:w-[calc(40vw)] 2xl:w-[calc(38vw)] 2xl:px-10 pb-10 relative xl:h-[calc(52vh)] 2xl:h-[calc(30vh)] ${
        pathname === "/robins" && "text-center"
      }`}
    >
      <h1 className="text-[26px] 2xl:text-[32px] font-bold text-[#355496]">
        {title}
      </h1>
      {shortDesc && (
        <h1 className="text-[18px] 2xl:text-[24px] font-bold text-[#00889C]">
          {shortDesc}
        </h1>
      )}
      <p className=" mt-7">{description}</p>
    </div>
  );
}
