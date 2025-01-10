"use client";
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Image from "next/image";

const images = ["/b001.web", "/b004.webp"];
export default function HeroSection_CS() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="image-wrap w-screen flex items-center justify-center h-[calc(50vh)] xl:h-[calc(100vh)] bg-black text-white bg-opacity-75">
      <img
        src={"/b002.webp"}
        alt="hero image"
        className="animate_img h-[calc(50vh)] xl:h-[calc(100vh)]"
      />
      <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className=" text-[25px] xl:text-[45px] font-bold">
            This Page Is Being Updated
          </h1>{" "}
          <p></p>
          {/* <p className="text-[18px] xl:text-[22px] mt-2 text-center">
          Follow us to see the latest Updates
          </p> */}
          <p className="text-[18px] xl:text-[22px] mt-10">
            Follow Us To see the latest Updates
          </p>
          <div className="flex items-center gap-4 mt-3">
            {/* <a href=""></a>
            <Image
              src={"/linkedinlogo.webp"}
              height={32}
              width={32}
              alt="urdu"
              className=" object-contain"
            /> */}
            <a
              href="https://www.facebook.com/centralschoolinternational"
              target="_blank"
            >
              <Image
                src={"/facebooklogo.webp"}
                height={32}
                width={32}
                alt="urdu"
                className=" object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/central.school.international/?fbclid=IwAR2-tAPKEW4ykF3QuvvUBADiuJxEzVvK3CKJkQU-PceD0p3630Z2wTACHxA"
              target="_blank"
            >
              <Image
                src={"/instagramlogo.webp"}
                height={32}
                width={32}
                alt="urdu"
                className=" object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
