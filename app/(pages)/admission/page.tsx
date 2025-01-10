"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import ButtonComponent from "@/app/sharecomponents/animatedButton/Button";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [formSelected, setFormSelected] = useState<string | null>(null);
  const [hoverSection, setHoverSection] = useState<number | null>(null);
  const handleFormSelect = (formType: string) => {
    setFormSelected(formType);
    // Scroll to the form section with animation
    const formSection = document.getElementById(formType);
    // hide the another one
    const anotherForm = formType === "teacher" ? "parent" : "teacher";
    const anotherFormSection = document.getElementById(anotherForm);
    if (anotherFormSection) {
      anotherFormSection.style.display = "none";
    }
    if (formSection) {
      formSection.style.display = "flex";
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-black overflow-hidden">
      <Navbar />
      <div className="xl:h-[120px]"></div>
      <div className="hidden xl:block relative w-screen h-[105vh]">
        <div
          className={` h-full ${
            hoverSection === 1 ? "w-[60%] overflow-hidden" : "w-[60%]"
          } absolute top-0 left-0 overflow-hidden z-20`}
        >
          <Image
            src={"/admission_left.webp"}
            height={1000}
            width={1000}
            alt="image"
            className={`w-full h-full absolute top-0 left-0 duration-300 ease-in-out ${
              hoverSection === 1 && "scale-105 pr-10 "
            }`}
          />
        </div>
        <div className="w-[100%] h-full overflow-hidden">
          <Image
            src={"/admission_right.webp"}
            height={1000}
            width={1000}
            alt="image"
            className={`w-full h-full  duration-300 ease-in-out ${
              hoverSection === 2 && "scale-105 "
            }`}
          />
        </div>

        <div className="flex absolute z-20 top-[5%] w-full h-full text-white">
          <div
            onMouseEnter={() => setHoverSection(1)}
            onMouseLeave={() => setHoverSection(null)}
            className="w-1/2 flex flex-col items-center justify-between h-full py-[3%] pb-[5%]"
          >
            <h1 className="text-[40px] ">
              For <span className="font-bold">Teachers</span>
            </h1>
            <button
              onClick={() => handleFormSelect("parent")}
              className="uppercase rounded-full px-10 py-2 border-[1px] border-white hover:text-[#0C8777] hover:bg-white"
            >
              Get To know more
            </button>
            {/* <div onClick={() => handleFormSelect("teacher")}>
              <ButtonComponent text="GET  TO KNOW MORE" />
            </div> */}
          </div>
          <div
            onMouseEnter={() => setHoverSection(2)}
            onMouseLeave={() => setHoverSection(null)}
            className="w-1/2 flex flex-col items-center justify-between h-full py-[3%] pb-[5%]"
          >
            <h1 className="text-[40px] ">
              For <span className="font-bold"> Parents</span>
            </h1>
            <button
              onClick={() => handleFormSelect("teacher")}
              className="uppercase rounded-full px-10 py-2 border-[1px] border-white hover:text-[#2f4a93] hover:bg-white"
            >
              Get To know more
            </button>
            {/* <div onClick={() => handleFormSelect("parent")}>
              <ButtonComponent text="GET  TO KNOW MORE" />
            </div> */}
          </div>
        </div>
      </div>
      <div className=" xl:hidden w-screen h-[80vh] bg-[#0e8777]">
        <div className=" w-full flex flex-col h-full justify-evenly  text-white">
          <div
            onMouseEnter={() => setHoverSection(1)}
            onMouseLeave={() => setHoverSection(null)}
            className=" flex gap-10 flex-col items-center justify-between  py-[3%] pb-[5%]"
          >
            <h1 className="text-[20px] xl:text-[40px] ">
              For <span className="font-bold">Teachers</span>
            </h1>
            <button
              onClick={() => handleFormSelect("parent")}
              className="uppercase text-[14px] rounded-full px-10 py-2 border-[1px] border-white hover:text-[#0C8777] hover:bg-white"
            >
              Get To know more
            </button>
          </div>
          <div
            onMouseEnter={() => setHoverSection(2)}
            onMouseLeave={() => setHoverSection(null)}
            className=" flex flex-col gap-10 items-center justify-between  py-[3%] pb-[5%]"
          >
            <h1 className="text-[20px] xl:text-[40px] ">
              For <span className="font-bold"> Parents</span>
            </h1>
            <button
              onClick={() => handleFormSelect("teacher")}
              className="uppercase text-[14px] rounded-full px-10 py-2 border-[1px] border-white hover:text-[#2f4a93] hover:bg-white"
            >
              Get To know more
            </button>
          </div>
        </div>
      </div>

      <div
        id="teacher"
        className={`w-full items-center justify-center mt-40 ${
          formSelected === "teacher" ? "flex" : "hidden"
        } transition-opacity duration-500 ease-in-out `}
      >
        <div className="relative md:h-auto w-[calc(90vw)] md:w-[calc(50vw)]">
          <Image
            src={"/parent_form.webp"}
            width={1500}
            height={1500}
            alt="birds"
            className="h-full w-full object-contain hidden md:block"
          />
          <div className="md:absolute border border-[#323692] rounded-xl md:border-0 pb-20 relative top-0 flex items-center justify-center h-full w-full left-0 px-10 md:px-[20%] pt-[20%]">
            <div className="w-full ">
              <h1 className="text-[40px] text-center">
                For <span className="font-bold">Parents</span>
              </h1>
              <div className="mt-20 w-full flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-10 w-full">
                  <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <textarea
                      rows={7}
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    ></textarea>
                    <textarea
                      rows={3}
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#d6d7e9]"
                    ></textarea>
                  </div>
                </div>
                <button className="bg-[#7073b3] hover:bg-[#585ca8] w-[50%] mt-10 rounded py-3 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="parent"
        className={`w-full items-center justify-center mt-40 ${
          formSelected === "parent" ? "flex" : "hidden"
        } transition-opacity duration-500 ease-in-out relative`}
      >
        <div className="relative md:h-auto w-[calc(90vw)] md:w-[calc(50vw)]">
          <Image
            src={"/teacher_form.webp"}
            width={1500}
            height={1500}
            alt="birds"
            className="h-full w-full object-contain hidden md:block"
          />
          <div className="md:absolute border border-[#028676] rounded-xl md:border-0 pb-20 relative top-0 flex items-center justify-center h-full w-full left-0 px-10 md:px-[20%] pt-[20%]">
            <div className="w-full ">
              <h1 className="text-[40px] text-center">
                For <span className="font-bold">Teachers</span>
              </h1>
              <div className="mt-20 w-full flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-10 w-full">
                  <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#028676] rounded p-3 bg-[#cce7e4]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#cce7e4]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#cce7e4]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#cce7e4]"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#cce7e4]"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-5">
                    <textarea
                      rows={7}
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#cce7e4]"
                    ></textarea>
                    <textarea
                      rows={3}
                      placeholder="Name"
                      className="w-full border outline-[#323692] rounded p-3 bg-[#cce7e4]"
                    ></textarea>
                  </div>
                </div>
                <button className="bg-[#4eaba0] hover:bg-[#51c4b4] w-[50%] mt-10 rounded py-3 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-[10%] flex items-end">
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
      <div className="xl:h-[250px]"></div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
