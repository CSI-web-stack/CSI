"use client";
import BirdCard from "@/app/sharecomponents/BirdCard";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const array = [
  {
    image: "/s1.webp",
    title: " CEO",
  },
  {
    image: "/s2.webp",
    title: " Entrepreneur",
  },
  {
    image: "/s3.webp",
    title: " Journalist",
  },
  {
    image: "/s4.webp",
    title: " Creative",
  },
  {
    image: "/s5.webp",
    title: " Philanthropist",
  },
  {
    image: "/s6.webp",
    title: " Chef",
  },
];
const array_one = [
  {
    image: "/p2_1.webp",
    title: "Culinary Arts",
    color: "#028676",
  },
  {
    image: "/p2_2.webp",
    title: "Mindful Gardening",
    color: "#355496",
  },
  {
    image: "/p2_3.webp",
    title: "Pottery",
    color: "#028676",
  },
  {
    image: "/p2_4.webp",
    title: "Stargazing",
    color: "#355496",
  },
  {
    image: "/p2_5.webp",
    title: "Yoga",
    color: "#355496",
  },
  {
    image: "/p2_6.webp",
    title: "Meditation",
    color: "#028676",
  },
  {
    image: "/p2_7.webp",
    title: "Calligraphy",
    color: "#355496",
  },
  {
    image: "/p2_8.webp",
    title: "Drama",
    color: "#028676",
  },
];
const array_two = [
  {
    image: "/p3_01.webp",
    title: "Swimming",
  },
  {
    image: "/p3_02.webp",
    title: "Track & Field",
  },
  {
    image: "/p3_03.webp",
    title: "Basketball",
  },
  {
    image: "/p3_04.webp",
    title: "futsal",
  },
  {
    image: "/p3_05.webp",
    title: "Archery",
  },
  {
    image: "/p3_06.webp",
    title: "Cricket",
  },
  {
    image: "/p3_07.webp",
    title: "martial arts",
  },
  {
    image: "/p3_08.webp",
    title: "volleyball",
  },
  {
    image: "/p3_09.webp",
    title: "badminton",
  },
  {
    image: "/p3_10_1.webp",
    title: "Mountain climbing",
  },
];
export default function page() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  function handleMouseEnterLast(index: number) {
    setActiveHoverIndex(index);
  }
  function handleMouseLeaveLast(event: any) {
    setActiveHoverIndex(null);
  }
  return (
    <div className="pt-[120px] xl:pt-[200px] text-black w-screen overflow-hidden">
      <Navbar />
      <section>
        <h1 className="text-[25px] text-center 2xl:text-[35px] font-bold">
          The Take Flight Academic Program at CSI
        </h1>
        <section data-aos="fade-right" className="w-full mt-10">
          <div className="h-auto w-[90vw] xl:w-[calc(70vw)] relative  ">
            <Image
              src={"/tree.webp"}
              height={1000}
              width={2000}
              className="h-auto w-full"
              alt="tree-of-programs"
            />
            <div className="absolute top-[14%] xl:top-[30%] 2xl:top-[25%] left-[13%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(1)}
                onMouseLeave={handleMouseLeaveLast}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -left-[30px] xl:left-[50px] w-[400px] ${
                    activeHoverIndex === 1 ? "block" : "hidden"
                  }`}
                >
                  <BirdCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="CSI Eagles"
                    bgColor="bg-[#00889C]"
                    description="CSI Eagles is our most advanced program. Building on our earlier programs, this program focuses in building the cognitive skills and academic competencies of our students to make sure they excel in the final stage of their schooling journey."
                    image="vector_2"
                    link=""
                  />
                </div>
                <h1 className="absolute -top-[20px] xl:top-0 -left-5 xl:-left-[60px]  text-black font-bold text-[12px] xl:text-[20px]">
                  CSI Eagles
                </h1>
                <Link href={""}>
                  <Image
                    src={"/02.webp"}
                    height={150}
                    width={150}
                    className="h-[50px] xl:h-[150px] w-auto object-contain cursor-pointer"
                    alt="02"
                  />
                </Link>
              </div>
            </div>
            <div className="absolute top-[25%] xl:top-[28%] 2xl:top-[33%] left-[43%] cursor-pointer hover:scale-110 duration-300 ease-in-out z-20">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(2)}
                onMouseLeave={handleMouseLeaveLast}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -left-[120px] xl:left-[50px] w-[400px] ${
                    activeHoverIndex === 2 ? "block" : "hidden"
                  }`}
                >
                  <BirdCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="CSI Larks"
                    bgColor="bg-[#009C93]"
                    description="CSI Larks, our Middle School Program, is both globally aligned and locally grounded. This program ensures that our students benefit from international best practices as well as context driven insights."
                    image="frame_4x"
                    link=""
                  />
                </div>
                <h1 className="absolute top-0 -left-[30px]  text-black font-bold text-[12px] xl:text-[20px]">
                  CSI Larks
                </h1>
                <Link href={""}>
                  <Image
                    src={"/01.webp"}
                    height={120}
                    width={120}
                    className="h-[50px] xl:h-[120px] w-auto object-contain cursor-pointer"
                    alt="02"
                  />
                </Link>
              </div>
            </div>
            <div className="absolute top-[45%] xl:top-[55%] 2xl:top-[60%] h-[100px] w-[150px]  left-[38%] cursor-pointer hover:scale-110 duration-300 ease-in-out z-20">
              <div
                className="h-[100px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(3)}
                onMouseLeave={handleMouseLeaveLast}
              >
                <div
                  className={`absolute z-20 -top-[150px] xl:-top-[280px] -left-[100px] xl:left-[50px] w-[400px] ${
                    activeHoverIndex === 3 ? "block" : "hidden"
                  }`}
                >
                  <BirdCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="CSI Sparrows"
                    bgColor="bg-[#0086B7]"
                    image="vector_3"
                    link="/sparrows"
                    description="CSI Sparrows is a bespoke Primary Level Program combining the expertise of Cambridge and CSI's Team."
                  />
                </div>
                <Link href={"/sparrows"}>
                  <Image
                    src={"/04.webp"}
                    height={100}
                    width={100}
                    className="h-[50px] xl:h-[100px] w-auto object-contain cursor-pointer"
                    alt="02"
                  />
                </Link>
                <h1 className="  text-black font-bold text-[12px] xl:text-[17px] mt-2 xl:mt-5">
                  CSI Sparrows
                </h1>
              </div>
            </div>
            <div className="absolute top-[30%] xl:top-[42%] 2xl:top-[47%] left-[65%] cursor-pointer hover:scale-110 duration-300 ease-in-out z-10">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(4)}
                onMouseLeave={handleMouseLeaveLast}
              >
                <div
                  className={`absolute -top-[150px] xl:-top-[280px] -left-[190px] xl:left-[50px] w-[400px] ${
                    activeHoverIndex === 4 ? "block" : "hidden"
                  }`}
                >
                  <BirdCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title=" CSI Robins"
                    bgColor="bg-[#00889C]"
                    description="CSI Robins is our Early Years Program. Its focus on play based learning, research driven lessons, and alignment with international standards ensures that our Robbins recieve the best early years education."
                    image="vector_4"
                    link="/robins"
                  />
                </div>
                <h1 className="  text-black font-bold text-[12px] xl:text-[20px]">
                  CSI Robins
                </h1>
                <Link href={"/robins"}>
                  <Image
                    src={"/03.webp"}
                    height={80}
                    width={80}
                    className="h-[50px] xl:h-[80px] w-auto object-contain cursor-pointer"
                    alt="02"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div
        data-aos="fade-down"
        className=" justify-between relative overflow-hidden w-screen"
      >
        <div className="w-full">
          <div className="hidden absolute -top-[80px] 2xl:top-0 left-0 xl:flex flex-col w-full items-center ">
            <div className="mt-20  w-[80%] xl:w-[50%]">
              <h1 className="text-[25px] text-center 2xl:text-[35px] font-bold">
                The CSI Extended Learning Program
              </h1>
              <p className="text-center mt-5 text-[18px] 2xl:text-[18px]">
                At CSI, learning takes place both inside & outside the
                classroom. Our extended learning program makes Sure that our
                students learn through play, projects, co-curriculars and
                athletics.
              </p>
            </div>{" "}
          </div>
          <div className="hidden xl:block absolute left-0 top-[50%] w-1/2 px-[10%]">
            <h1 className="text-[25px] text-[#028676] 2xl:text-[38px] font-bold">
              Project Based Learning
            </h1>
            <p className="mt-10 text-[18px] 2xl:text-[18px]">
              Our Project based learning program offers CSI Robins the
              opportunity to engage in multiple projects based roles all
              designed roles all designed to improve their cognition,social,
              emotional emotional intelligence and confidence. These roles
              include:
            </p>
          </div>
          {/* <img
              src="/ANIMATION2.GIF"
              alt="image"
              style={{ width: '100%', height: 'auto', objectFit: 'contain', marginTop: '5rem', marginBottom: '5rem' }}
              className="xl:my-0"
            /> */}
          <Image
            src={"/ANIMATION2.gif"}
            width={1500}
            height={1500}
            className="w-full h-auto object-contain"
            unoptimized={true}
            alt="animation"
          />
        </div>
        <div className="px-[10%] xl:hidden">
          <h1 className="text-[25px] text-[#028676] 2xl:text-[38px] font-bold">
            Project Based Learning
          </h1>
          <p className="mt-10 text-[18px] 2xl:text-[18px]">
            Our Project based learning program offers CSI Robins the opportunity
            to engage in multiple projects based roles all designed roles all
            designed to improve their cognition,social, emotional emotional
            intelligence and confidence. These roles include:
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between px-[5%]">
        {array.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center w-[100%] md:w-[50%] xl:w-[30%] mt-20"
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              alt="image"
              className="h-[300px] w-auto object-contain hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            />
            <button className="border-[1px] border-gray-400 rounded-full px-5 py-2 hover:border-[#028676] hover:border-1">
              <p>
                Young <span className="text-[#028676] ">{item.title}</span>
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="justify-between xl:relative overflow-hidden w-screen">
        <div className="w-full">
          <div className="absolute xl:block hidden right-0 top-20 2xl:top-[50%] w-1/2 px-[10%]">
            <h1 className="text-[25px] text-[#028676] 2xl:text-[38px] font-bold">
              The CSI Co-Curricular Program
            </h1>
            <p className="mt-10 text-[18px] 2xl:text-[18px]">
              Our extensive co-curricular program builds upon our take flight
              academic program and allows students to make further gains through
              project and play based learning. The following are the activities
              offered:
            </p>
          </div>
          <img
            src="/Animation002.gif"
            alt="image"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
            }}
            className="xl:my-0"
          />
        </div>
        <div className="xl:hidden px-[10%]">
          <h1 className="text-[25px] text-[#028676] 2xl:text-[38px] font-bold">
            The CSI Co-Curricular Program
          </h1>
          <p className="mt-10 text-[18px] 2xl:text-[18px]">
            Our extensive co-curricular program builds upon our take flight
            academic program and allows students to make further gains through
            project and play based learning. The following are the activities
            offered:
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between px-[5%]">
        {array_one.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center w-[100%] md:w-[50%] xl:w-[25%] mt-20"
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              alt="image"
              className="h-[200px] w-auto object-contain hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            />

            <p
              style={{
                color: item.color,
              }}
              className="text-[#028676] font-bold text-[25px] 2xl:text-[32px]"
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col xl:flex-row w-full mt-[10%] relative">
        <div className="xl:hidden px-[10%]">
          <h1 className="text-[25px] text-[#028676] 2xl:text-[38px] font-bold">
            The CSI Athletics Program
          </h1>
          <p className="mt-10 text-[18px] 2xl:text-[18px]">
            Extensive Research has established that sports and athletics are
            critically important in improving learning and academic performance.
            At CSI we provide sporting facilities and an athletics program built
            to help your child excel. We offer:
          </p>
        </div>
        <div className="hidden xl:flex absolute top-0 left-0 xl:w-[60%] px-[10%] h-full  flex-col justify-center">
          <h1 className="text-[25px] text-[#028676] 2xl:text-[38px] font-bold">
            The CSI Athletics Program
          </h1>
          <p className="mt-10 text-[18px] 2xl:text-[18px]">
            Extensive Research has established that sports and athletics are
            critically important in improving learning and academic performance.
            At CSI we provide sporting facilities and an athletics program built
            to help your child excel. We offer:
          </p>
        </div>
        <Image
          src={"/animation-bird2new.gif"}
          width={1500}
          height={1500}
          className="w-full h-auto object-contain"
          unoptimized={true}
          alt="animation"
        />
      </div>

      <div className="xl:mt-20 flex flex-wrap justify-between px-[5%]">
        {array_two.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center w-[100%] md:w-[50%] xl:w-[33%] mt-20 "
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              alt="image"
              className="h-[300px] w-auto object-contain hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            />

            <p
              style={{
                color: index % 2 ? "#028676" : "#355496",
              }}
              className="text-[#028676] font-bold text-[25px] uppercase 2xl:text-[32px]"
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[150px] xl:mt-[400px]">
        <Footer />
      </div>
    </div>
  );
}
