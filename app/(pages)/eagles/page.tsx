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
      <div className="md:h-[calc(70vh)] px-[40px] mb-[50px] md:mb-0  flex flex-col xl:flex-row w-screen items-center justify-center gap-20 mt-[150px] xl:mt-20 2xl:mt-0">
        <Image src={"/02.webp"} height={200} width={200} alt="vector" />
        <div className="xl:w-[50%] 2xl:w-[40%]">
          <h1 className="text-[28px] 2xl:text-[35px] font-bold">CSI Eagles</h1>
          <h1 className="text-[28px] 2xl:text-[35px] font-bold text-[#355496]">
            Preparing Leaders for Tomorrow
          </h1>
          <p className="mt-10">
            At CSI Eagles, our commitment is to prepare students for the
            challenges of higher education and beyond through a comprehensive O
            and A level program. By building strong academic foundations and
            enhancing key life skills, we set our students on a path to success
            in a global environment.
          </p>
        </div>
      </div>
      <div>
        <div className="">
          <div className="w-[100%] lg:hidden flex flex-col items-center">
            <ServicesCard
              title="Academically Rigorous"
              shortDesc="Rigor and Excellence in Education"
              description="Experience a curriculum designed to challenge and inspire, with a focus on deep understanding and mastery of subjects critical for academic and professional success."
            />
            <ServicesCard
              title="Skill Development"
              shortDesc="Beyond the Books: Skills for the Future"
              description="Develop critical thinking, problem-solving, and communication skills through our innovative teaching approaches, ensuring you are ready for both academic pursuits and real-world challenges."
            />
            <ServicesCard
              title="Personalized Learning"
              shortDesc="Tailored for Your Success"
              description="Our personalized learning paths cater to individual strengths and interests, helping every student achieve their full potential with customized support and resources."
            />
            <ServicesCard
              title="University Preparation"
              shortDesc="Smooth Transition to Higher Education"
              description="From university counseling to application assistance and exam preparation, we provide comprehensive support to streamline your journey into higher education."
            />
            <ServicesCard
              title="Global Perspective"
              shortDesc="Cultivating Global Citizens"
              description="Our curriculum integrates a global perspective, preparing you to thrive in a multicultural world and fostering an understanding of international issues and cultural diversity."
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
                title="Academically Rigorous"
                shortDesc="Rigor and Excellence in Education"
                description="Experience a curriculum designed to challenge and inspire, with a focus on deep understanding and mastery of subjects critical for academic and professional success."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Skill Development"
                shortDesc="Beyond the Books: Skills for the Future"
                description="Develop critical thinking, problem-solving, and communication skills through our innovative teaching approaches, ensuring you are ready for both academic pursuits and real-world challenges."
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
                title="Personalized Learning"
                shortDesc="Tailored for Your Success"
                description="Our personalized learning paths cater to individual strengths and interests, helping every student achieve their full potential with customized support and resources."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="University Preparation"
                shortDesc="Smooth Transition to Higher Education"
                description="From university counseling to application assistance and exam preparation, we provide comprehensive support to streamline your journey into higher education."
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
                shortDesc="Cultivating Global Citizens"
                title="Global Perspective"
                description="Our curriculum integrates a global perspective, preparing you to thrive in a multicultural world and fostering an understanding of international issues and cultural diversity."
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-between items-center gap-5 px-[10%] mt-20">
        <button className="border border-gray-400 rounded-full px-10 py-2 text-[#028676] text-[18px] font-bold">
          Join CSI Eagles Today
        </button>
        <p className="text-[22px] text-black text-center">
          Ready to take the next step? Apply now to become part of a community
          that values academic excellence and global awareness.
        </p>
      </div> */}
      {/* <div className="mt-[20%] hidden md:flex  items-end">
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
