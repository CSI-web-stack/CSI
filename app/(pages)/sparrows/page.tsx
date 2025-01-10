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
          src={"/04.webp"}
          height={200}
          width={200}
          data-aos="fade-right"
          alt="vector"
        />
        <div data-aos="fade-left" className="xl:w-[50%] 2xl:w-[40%]">
          <h1 className="text-[28px] 2xl:text-[35px] font-bold">
            CSI Sparrows
          </h1>
          <h1 className="text-[28px] 2xl:text-[35px] font-bold text-[#355496]">
            Tailored Learning for Young Minds
          </h1>
          <p className="mt-10">
            CSI Sparrows is our primary level program expertly crafted by
            Cambridge specialists to meet the unique educational needs of
            Pakistani students. Our bespoke curriculum ensures a strong
            foundation in key academic areas while fostering a love for
            learning.
          </p>
        </div>
      </div>
      <div>
        <div className="">
          <div className="w-[100%] lg:hidden flex flex-col items-center">
            <ServicesCard
              title="Customized Curriculum"
              shortDesc="Education That Fits Every Child"
              description="Our curriculum is custom-designed to address the specific learning styles and cultural contexts of our students. By focusing on individual strengths and challenges, we ensure a more personalized and effective education."
            />
            <ServicesCard
              title="Engaging Learning Environment"
              shortDesc="Active and Fun Learning"
              description="Learning at CSI Sparrows is dynamic and interactive. We use a variety of teaching methods including games, storytelling, and digital media to keep students engaged and excited about learning."
            />
            <ServicesCard
              title="Foundational Skill Development"
              shortDesc="Building Strong Beginnings"
              description="We emphasize the development of fundamental skills such as reading, writing, math, and critical thinking from an early age. Our program is structured to ensure a smooth transition to higher academic levels."
            />
            <ServicesCard
              title="Cultural Relevance"
              shortDesc="Rooted in Local Culture"
              description="Our curriculum integrates local cultural elements, making learning relatable and enriching students' understanding of their own heritage. This approach helps foster a sense of pride and identity among our young learners"
            />
            <ServicesCard
              title="Community and Family Engagement"
              shortDesc="Strengthening Connections"
              description="CSI Sparrows believes in the power of community and family involvement in education. We encourage parent participation and host community events to build strong ties and support networks."
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
                title="Customized Curriculum"
                shortDesc="Education That Fits Every Child"
                description="Our curriculum is custom-designed to address the specific learning styles and cultural contexts of our students. By focusing on individual strengths and challenges, we ensure a more personalized and effective education."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Engaging Learning Environment"
                shortDesc="Active and Fun Learning"
                description="Learning at CSI Sparrows is dynamic and interactive. We use a variety of teaching methods including games, storytelling, and digital media to keep students engaged and excited about learning."
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
                title="Foundational Skill Development"
                shortDesc="Building Strong Beginnings"
                description="We emphasize the development of fundamental skills such as reading, writing, math, and critical thinking from an early age. Our program is structured to ensure a smooth transition to higher academic levels."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Cultural Relevance"
                shortDesc="Rooted in Local Culture"
                description="Our curriculum integrates local cultural elements, making learning relatable and enriching students' understanding of their own heritage. This approach helps foster a sense of pride and identity among our young learners"
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
                shortDesc="Strengthening Connections"
                title="Community and Family Engagement"
                description="CSI Sparrows believes in the power of community and family involvement in education. We encourage parent participation and host community events to build strong ties and support networks."
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-between items-center gap-5 px-[10%] mt-20">
        <button className="border border-gray-400 rounded-full px-10 py-2 text-[#028676] text-[18px] font-bold">
          Enroll at CSI Sparrows
        </button>
        <p className="text-[22px] text-black text-center">
          Enroll your child in CSI Sparrows and give them the best start in
          their educational journey. Discover a program where academic and
          personal growth go hand in hand.
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
