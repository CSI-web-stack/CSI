"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <section className="xl:mb-[100px]">
        <div className="h-[400px] xl:h-screen w-screen relative">
          <Image
            src={"/see_all_campush_hero.webp"}
            height={1500}
            width={1500}
            alt="her"
            className="absolute top-0 left-0 w-screen h-[400px] xl:h-auto"
          />

          <h1
            data-aos="fade-down"
            className="text-[25px] xl:text-[58px] font-[700px] absolute top-[55%] xl:top-[20%] left-0 w-full text-center z-20 text-white"
          >
            See the campus
          </h1>
          <Link href="https://csi.edu.pk/contact-us">
            <button className="bg-white rounded-full px-10 py-2 text-black uppercase text-[20px] xl:text-[28px] font-[400] absolute left-20 z-20 top-[70%] xl:top-[80%]">
              Book A tour
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-[10%]">
        <div className="flex flex-col items-center w-full">
          <p style={{ color: "black", fontSize: "24px" }}>
            Purpose Built Flagship Campus
          </p>
          <Image
            src={"/VDO.webp"}
            height={1000}
            width={1000}
            alt="vdo"
            className="object-contain mt-10 w-[60%] h-auto"
          />
        </div>
      </section>
      <section className="text-[14px] xl:text-[30px] text-black mt-10">
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/KI8A7197.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="">
            Custom Made <br /> Learning Spaces
          </p>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-right ">
              Designed with <br />
              Expertise and Experience
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_1.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_2.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-left ">
              Specifically Designed to <br /> Facilitate Project Based <br />{" "}
              Learning
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-right ">
              Made to Facilitate Play <br /> Based Learning
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_3.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_4.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-left ">
              Expansive Outdoor <br /> Sports Facilities
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-right ">
              Built to Make <br />
              Learning Interactive
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_5.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_6.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-left ">
              Designed for the <br /> Needs of All Ages
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-right ">
              Created to Carry Out A <br /> Custom Sports Program
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_7.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_8.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-left ">
              Built to Ensure Low <br /> Student-Teacher Ratios
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-right ">
              Featuring a Variety of <br /> Skill Specific <br />
              Learning Areas
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_9.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_10.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-left ">
              Made to Ensure <br />
              Student Comfort
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-2 xl:p-10">
            <p className="text-left ">
              Designed to <br />
              Foster Collaboration
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_11.webp"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <footer className="mt-[100px] xl:mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
