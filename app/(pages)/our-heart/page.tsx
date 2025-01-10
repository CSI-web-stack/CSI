"use client";
import BirdCard from "@/app/sharecomponents/BirdCard";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import Swiper from "@/app/sharecomponents/swiper/Swiper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StarsCard from "@/app/sharecomponents/StarsCard";

export default function Page() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(0);

  function handleMouseEnterLast(index: any) {
    setActiveHoverIndex(index);
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10"></div>
      <section
        className="flex justify-center items-center  md:h-screen xl:pt-10 md:mt-0 md:p-20"
        style={{ maxHeight: "850px" }}
      >
        <div
          data-aos="fade-right"
          className="w-1/2 flex justify-center md:justify-end md:mt-0 pt-16"
        >
          <Image
            src={"/our-heart.webp"}
            height={1000}
            width={1000}
            className="object-contain w-[80%] h-[calc(60vh)] pt-10 md:pt-0"
            alt="about us"
          />
        </div>
        <div data-aos="fade-left" className="w-3/5 mr-4 md:mr-0 md:w-1/2">
          <h4 className="text-[30px] md:text-[40px] font-semibold">
            Our Heart
          </h4>
          <p className="text-[12px] md:text-[16px] mb-4 mt-4 md:mb-0">
            Central School International (CSI) is a Pan-Pakistan School Network
            which provides an education rooted in research, international best
            practices, and values.
          </p>
          <p className="text-[12px] md:text-[16px]">
            Our academic and extended learning programs ensure that our students
            develop the knowledge base, skills, and character traits needed to
            succeed in todays global age.
          </p>
        </div>
      </section>
      <section className="bg-[#1f4694] px-[5%] py-[5%] text-white pb-[15%] ">
        <h4 className="text-[42px] px-[45px] text-center font-bold md:font-normal md:text-left">
          Our Guiding Principles
        </h4>
        <div className="flex flex-col md:flex-row w-full md:justify-between">
          <div data-aos="zoom-in" className="md:w-[33%] ">
            <Image
              src={"/elam.webp"}
              height={500}
              width={500}
              alt="elam"
              className="w-full h-auto object-contain"
            />
            <div className=" px-[45px]">
              <div className=" justify-center md:justify-normal flex items-center gap-2">
                <p className=" text-[28px]">Knowledge</p>
                <Image
                  src={"/elam_text.webp"}
                  height={40}
                  width={40}
                  alt="elam"
                />
              </div>
              <p className="text-center md:text-left mt-3">
                Exploring the infinite potential of the human mind and spirit
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="md:w-[33%]">
            <Image
              src={"/amal.webp"}
              height={500}
              width={500}
              alt="elam"
              className="w-full h-auto object-contain"
            />
            <div className="px-[45px]">
              <div className="justify-center md:justify-normal flex items-center gap-2">
                <p className="text-[28px]">Action</p>
                <Image
                  src={"/amal_text.webp"}
                  height={40}
                  width={40}
                  alt="elam"
                />
              </div>
              <p className="text-center md:text-left mt-3">
                Taking meaningful actions in the pursuit of one’s goals
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="md:w-[33%]">
            <Image
              src={"/azam.webp"}
              height={500}
              width={500}
              alt="elam"
              className="w-full h-auto object-contain"
            />
            <div className="px-[45px]">
              <div className="justify-center md:justify-normal flex items-center gap-2">
                <p className="text-[28px]">Resolve</p>
                <Image
                  src={"/azam_text.webp"}
                  height={40}
                  width={40}
                  alt="elam"
                />
              </div>
              <p className="text-center md:text-left mt-3">
                Fostering nobility and strength of character, providing a sense
                of grounding
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center md:text-start text-[24px] md:text-[35px] font-bold mt-20 md:mt-20 px-[45px]">
            CSI’s Constellation of Character
          </h3>
          <p className="text-center md:text-start mt-4 mx-4 md:mx-0 md:pl-[45px]">
            CSI seeks to include the following constellation of values in all of
            our students.
          </p>
          <div className="w-full relative">
            <Image
              src={"/Stars-bg.webp"}
              alt="stars"
              height={1000}
              width={1000}
              className="w-screen h-auto object-contain"
            />
            <div className="absolute top-[25%] right-[23%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(1)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] right-[-150px] z-20 xl:right-[120px] w-[400px] ${
                    activeHoverIndex === 1 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Honour"
                    bgColor="bg-[#00889C]"
                    description="Honour in being kind, honour in affirming human dignity, honour in lifelong learning, the students of CSI derive a sense of honour from being the best versions of themselves."
                    image="honour_bgCard"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Honour
                </h1>
              </div>
            </div>
            <div className="absolute top-[32%] right-[3%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(2)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] right-[-90px] xl:right-[120px] w-[400px] ${
                    activeHoverIndex === 2 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Respect​"
                    bgColor="bg-[#00889C]"
                    description="Respect for themselves, respect for those around them, respect for their beliefs, respect for the environment and respect for their communities. The students of CSI remain in respect of the things which hold the most value"
                    image="honour_bgCard"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Respect
                </h1>
              </div>
            </div>
            <div className="absolute top-[48%] left-[33%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(3)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] right-[-160px] z-20 xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 3 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Balance"
                    bgColor="bg-[#00889C]"
                    description="Aware of the importance of maintaining a balanced proportion between the many facets of life, the students of CSI value proportionality. This extends to maintaining a harmony between their health and studies, their ambitions and values, action and reflection. They believe that there is a place for everything and that everything should be in its place."
                    image="balance_starbg"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Balance
                </h1>
              </div>
            </div>
            <div className="absolute top-[65%] left-[10%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(4)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] left-[-30px] xl:left-[20px] w-[400px] ${
                    activeHoverIndex === 4 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Empathy"
                    bgColor="bg-[#00889C]"
                    description="Compassionate, caring, empathetic and deeply committed to helping others, the students of CSI see themselves as part of a shared humanity with those around them and those around the world."
                    image="empath_starbg"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Empathy
                </h1>
              </div>
            </div>
            <div className="absolute top-[70%] xl:top-[60%] left-[40%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(5)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-[130px] xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 5 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Conviction"
                    bgColor="bg-[#00889C]"
                    description="Conviction in the importance of deep learning, conviction in the importance of meaningful action and conviction in the importance of being principled. Students of CSI are characterized by the conviction with which they navigate life and learning."
                    image="balance_starbg"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Conviction
                </h1>
              </div>
            </div>
            <div className="absolute top-[90%] xl:top-[70%] right-[30%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(6)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-[160px] xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 6 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Identity"
                    bgColor="bg-[#00889C]"
                    description="Aware of their local contexts, aware of their histories and aware of their value frameworks, the students of CSI take pride in who they are and where they come from. They are confident in themselves and of their place in the world."
                    image="balance_starbg"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Identity
                </h1>
              </div>
            </div>
            <div className="absolute top-[50%] -right-10 xl:right-[10%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(7)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-10 xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 7 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Positivity"
                    bgColor="bg-[#00889C]"
                    description="Optimistic about the future, hopeful of what their lives hold for them and filled with belief in themselves, students of CSI view the world through a lens of unmitigated positivity. They see the lighter side of life and view obstacles as challenges to meet and opportunities to learn from."
                    image="balance_starbg"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Positivity
                </h1>
              </div>
            </div>
            <div className="absolute top-[75%] -right-10 xl:right-[10%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(8)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-10 xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 8 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Innovation"
                    bgColor="bg-[#00889C]"
                    description="Engaged in critical thinking, open to new ways of thinking, and fostering an optimistic view of technology, the students of CSI constantly seek to build and improve what they already know, and what already exists."
                    image="balance_starbg"
                    link=""
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Innovation
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-[10px]">
        <Footer />
      </footer>
    </div>
  );
}
