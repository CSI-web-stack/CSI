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
        <Image src={"/01.webp"} height={200} width={200} alt="vector" />
        <div className="xl:w-[50%] 2xl:w-[40%]">
          <h1 className="text-[28px] 2xl:text-[35px] font-bold">CSI Larks</h1>
          <h1 className="text-[28px] 2xl:text-[35px] font-bold text-[#355496]">
            Global Learning, Local Insights
          </h1>
          <p className="mt-10">
            CSI Larks is our dedicated middle school program where international
            best practices meet contextual learning tailored to our students'
            cultural and educational backgrounds, fostering an environment that
            inspires both personal and academic growth.
          </p>
        </div>
      </div>
      <div>
        <div className="">
          <div className="w-[100%] lg:hidden flex flex-col items-center">
            <ServicesCard
              title="Academically Rigorous"
              shortDesc="Excellence in Education"
              description="Our curriculum, developed in collaboration with Cambridge, is rigorous and designed to challenge students, setting a robust foundation for their future studies and ensuring they meet international academic standards."
            />
            <ServicesCard
              title="Local and Global Insights"
              shortDesc="Learning That Reflects Your World"
              description="We tailor our academic approach to include local relevance in a global framework, ensuring students receive an education that is both globally competitive and locally pertinent."
            />
            <ServicesCard
              title="Holistic Growth"
              shortDesc="Developing Well-Rounded Individuals"
              description="Our program goes beyond traditional academics, incorporating arts, sports, and leadership activities to develop students' social, emotional, and physical competencies."
            />
            <ServicesCard
              title="Technological Fluency"
              shortDesc="Technology in Learning"
              description="At CSI Larks, technology integration is key. We utilize advanced tools and platforms to enhance educational delivery and engage students in modern learning methods."
            />
            <ServicesCard
              title="Cultural Competence"
              shortDesc="Embracing Diversity"
              description="We emphasize cultural awareness and sensitivity, preparing students to operate successfully in a diverse global society through exposure to various cultures and perspectives."
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
                shortDesc="Excellence in Education"
                description="Our curriculum, developed in collaboration with Cambridge, is rigorous and designed to challenge students, setting a robust foundation for their future studies and ensuring they meet international academic standards."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Local and Global Insights"
                shortDesc="Learning That Reflects Your World"
                description="We tailor our academic approach to include local relevance in a global framework, ensuring students receive an education that is both globally competitive and locally pertinent."
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
                title="Holistic Growth"
                shortDesc="Developing Well-Rounded Individuals"
                description="Our program goes beyond traditional academics, incorporating arts, sports, and leadership activities to develop students' social, emotional, and physical competencies."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Technological Fluency"
                shortDesc="Technology in Learning"
                description="At CSI Larks, technology integration is key. We utilize advanced tools and platforms to enhance educational delivery and engage students in modern learning methods."
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
                shortDesc=" Embracing Diversity"
                title="Cultural Competence"
                description="We emphasize cultural awareness and sensitivity, preparing students to operate successfully in a diverse global society through exposure to various cultures and perspectives."
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-between items-center gap-5 px-[10%] mt-20">
        <button className="border border-gray-400 rounded-full px-10 py-2 text-[#028676] text-[18px] font-bold">
          Explore CSI Larks
        </button>
        <p className="text-[22px] text-black text-center">
          Ready to take the next step in your educational journey? Click here to
          learn more about how CSI Larks can prepare you for the challenges and
          opportunities of the future.
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
