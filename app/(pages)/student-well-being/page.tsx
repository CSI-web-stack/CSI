"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleLoad = () => {
      AOS.refresh();
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />

      <section
        data-aos="fade-down"
        className="w-full bg-[#214395] pt-[100px] xl:pt-[200px] pb-10"
      >
        <h1 className="text-[30px] xl:text-[68px] font-[400] text-center text-white px-10">
          Student <span className="font-[700] "> Well-Being</span>
        </h1>

        <div className="w-screen  flex justify-center">
          <Image
            src={"/student_wellb_1.webp"}
            height={1000}
            width={1000}
            alt="student well being"
            className="w-full xl:w-[60%] h-auto object-contain"
            loading="lazy"
            onLoad={() => AOS.refresh()}
          />
        </div>
      </section>
      <section className="text-[8px] xl:text-[20px] text-center flex flex-col gap-10 xl:gap-0">
        <div className="relative w-full h-auto mt-5">
          <Image
            src={"/student_wellb_2.webp"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[40%] absolute top-0 h-full flex items-center right-5 xl:right-20 text-black">
            <p data-aos="fade-left">
              We offer state of the art transport facilities for our students.
              Our technology driven service allows parents to use a
              user-friendly app to monitor their children's journey, the
              location of the vehicle and the well-being of their
              children during travel.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_3.webp"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
            loading="lazy"
            onLoad={() => AOS.refresh()}
          />
          <div className="w-[30%] absolute top-0 h-full flex items-center left-5 xl:left-20 text-black">
            <p data-aos="fade-right">
              We offer Day-Boarding to ensure that CSI students feel at home
              when taking part in the varied and unique courses offered as part
              of our Extended Learning
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_4.webp"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[35%] absolute top-0 h-full flex items-center right-5 xl:right-20 text-black">
            <p data-aos="fade-left">
              At CSI, every student's everyday matters. We use state of the art
              digital architecture to monitor and document the social and
              emotional wellbeing, academic progress, interests and strengths of
              our students. We also use this to make sure that parents as well
              as teachers are aware of the challenges that students may be
              facing in their learning so that we can address them well before
              they become genuine academic issues.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_5.webp"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
            loading="lazy"
            onLoad={() => AOS.refresh()}
          />
          <div className="w-[35%] absolute top-0 h-full flex items-center left-5 xl:left-20 text-black">
            <p data-aos="fade-right">
              We believe that it takes a village to raise a child. As such, at
              CSI we have made sure that parents have a regular meeting with the
              principal that places the child at the center. We use real life
              data gathered in real time at CSI to anchor our discussions to
              make sure that these meetings are substantive and deal with the
              core issues facing our students in their learning journey.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_6.webp"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
            loading="lazy"
            onLoad={() => AOS.refresh()}
          />
          <div className="w-[35%] absolute top-0 h-full flex items-center right-5 xl:right-20 text-black">
            <p data-aos="fade-left">
              Nutrition is a critically important and often under discussed part
              of a child's education. CSI has a purpose-built in-house kitchen
              which adheres to the highest standards of hygiene which provides
              its students with freshly cooked hot meals to meet their
              nutritional needs.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-[50px] xl:mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
