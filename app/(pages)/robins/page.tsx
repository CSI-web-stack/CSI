"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import ServicesCard from "@/app/sharecomponents/ServicesCard";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="text-black overflow-hidden">
      <Navbar />
      <div className="md:h-[calc(70vh)] px-[40px] mb-[50px] md:mb-0 flex flex-col xl:flex-row w-screen items-center justify-center gap-20 mt-[150px] xl:mt-20 2xl:mt-0">
        <Image
          src={"/vector_smart_object_4.webp"}
          height={200}
          width={200}
          alt="vector"
        />
        <div className="xl:w-[40%] 2xl:w-[30%]">
          <h1 className="text-[28px] 2xl:text-[35px] font-bold">CSI Robins</h1>
          <h1 className="text-[28px] 2xl:text-[35px] font-bold text-[#355496]">
            Helping Young Minds take Flight
          </h1>
          <p className="mt-10">
            CSI Robins is our early years program. Designed with our
            Singapore partners, the CSI Robins Program wll ensure that your
            child's development is gentle, holistic and informed by the best
            practices.
          </p>
        </div>
      </div>
      <div>
        <div className="">
          <div className="w-[100%] lg:hidden flex flex-col items-center">
            <ServicesCard
              title="Value Centered"
              description="CSI Robins nurtures not only academic excellence but also key personal values. Our curriculum fosters integrity, respect, and empathy, helping children develop a strong moral compass and a character grounded in community values."
            />
            <ServicesCard
              title="Informed By Research"
              description="Our early years program is built on the latest educational research, designed in collaboration with Trehaus Singapore. We utilize advanced pedagogical strategies to support optimal cognitive and social development."
            />
            <ServicesCard
              title="Holistic"
              description="CSI Robins embraces a holistic educational approach, enriching traditional academics with music, arts, physical activities, and social learning. This broad-based curriculum supports all facets of a child's development."
            />
            <ServicesCard
              title="Focused on care and nature"
              description="Care and interaction with nature are fundamental to our learning environment. Children at CSI Robins experience daily engagement with natural settings, fostering a deep connection with the environment and emphasizing eco-conscious values."
            />
            <ServicesCard
              title="Play And Project Based"
              description="Our curriculum emphasizes play and project-based learning, encouraging creativity and practical problem solving. Children learn through hands-on activities and collaborative projects, boosting their communication skills and enthusiasm for learning."
            />
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] " />
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>

            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] ">
              <ServicesCard
                rightSideCard={true}
                title="Value Centered"
                description="CSI Robins nurtures not only academic excellence but also key personal values. Our curriculum fosters integrity, respect, and empathy, helping children develop a strong moral compass and a character grounded in community values."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Informed By Research"
                description="Our early years program is built on the latest educational research, designed in collaboration with Trehaus Singapore. We utilize advanced pedagogical strategies to support optimal cognitive and social development."
              />
            </div>
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]" />
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] " />
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>

            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] ">
              <ServicesCard
                rightSideCard={true}
                title="Holistic"
                description="CSI Robins embraces a holistic educational approach, enriching traditional academics with music, arts, physical activities, and social learning. This broad-based curriculum supports all facets of a child's development."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Focused on care and nature"
                description="Care and interaction with nature are fundamental to our learning environment. Children at CSI Robins experience daily engagement with natural settings, fostering a deep connection with the environment and emphasizing eco-conscious values."
              />
            </div>
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]" />
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]" />
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              {/* <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div> */}
            </div>

            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]">
              <ServicesCard
                rightSideCard={true}
                title="Play And Project Based"
                description="Our curriculum emphasizes play and project-based learning, encouraging creativity and practical problem solving. Children learn through hands-on activities and collaborative projects, boosting their communication skills and enthusiasm for learning."
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-[20%] hidden md:flex items-end">
        <Image
          src={"/tree_1.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[80px] h-auto object-contain"
        />
        <Image
          src={"/fox_color_1.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[150px] h-auto object-contain ml-[10%]"
        />
        <Image
          src={"/tree_2.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[50px] h-auto object-contain ml-[70%] mb-[-20px]"
        />
      </div> */}
      <div className="mt-[180px]">
        <Footer />
      </div>
    </div>
  );
}
