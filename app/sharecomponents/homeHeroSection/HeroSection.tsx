"use client";
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Image from "next/image";

const images = [
  "/banner_1.webp",
  "/banner_2.webp",
  "/banner_3.webp",
  "/banner_video.webm",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(8000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  useEffect(() => {
    setIntervalDuration(currentImageIndex === 3 ? 12000 : 8000);
  }, [currentImageIndex]);

  return (
    <>
      {" "}
      <div
        className={`${
          currentImageIndex === 3 ? "h-[30px]" : "h-[80px]"
        } xl:h-[0px]`}
      ></div>
      <div className="h-[calc(40vh)] image-wrap w-screen flex items-center justify-center md:h-[calc(60vh)] xl:h-[calc(100vh)] bg-white bg-opacity-75">
        {currentImageIndex === 3 ? (
          <video
            src="/banner_video.webm"
            autoPlay
            muted
            playsInline
            className="w-full h-auto object-contain "
          ></video>
        ) : (
          <>
            {images.map((image, index) => (
              <>
                <div
                  key={index}
                  className={`${
                    index === currentImageIndex ? "active" : ""
                  } absolute inset-0 transition-opacity duration-1000`}
                >
                  <Image
                    height={1500}
                    width={1500}
                    alt="image"
                    src={image}
                    className={`w-full h-auto object-contain ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                  />
                </div>
              </>
            ))}
          </>
        )}
        {(currentImageIndex === 0 || currentImageIndex === 1) && (
          <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center mt-0">
            <div className="flex flex-col items-center">
              <h1 className="text-[#fff] text-[25px] xl:text-[45px]">
                Knowledge, Action, Resolve
              </h1>{" "}
              <br />
              <p className="hidden md:block text-white mt-5 text-[18px] xl:text-[22px] w-[50%]">
                Empowering students with the wisdom to learn, the courage to
                act, and the determination to succeed.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
