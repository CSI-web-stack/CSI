"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function Page() {
  const [post, setPost] = useState<any>(null);
  const pathname = usePathname();
  let id = pathname.split("/").pop();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    getPostById();
  }, []);

  const getPostById = async () => {
    try {
      const response = await axios.get(
        `https://csi-cms-af35d1628083.herokuapp.com/api/posts/${id}`
      );
      setPost(response.data);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  };

  const renderContent = (content: any) => {
    return content.map((block: any, index: number) => {
      if (block.type === "h3") {
        return (
          <h3 key={index} className="text-[28px] font-semibold mt-4">
            {block.children.map((child: any, idx: number) => (
              <span key={idx}>{child.text}</span>
            ))}
          </h3>
        );
      } else if (block.type === "h4") {
        return (
          <h4 key={index} className="text-[32px] font-bold mt-5">
            {block.children.map((child: any, idx: number) => (
              <span key={idx}>{child.text}</span>
            ))}
          </h4>
        );
      } else if (block.children && block.children.length > 0) {
        return (
          <div key={index}>
            {block.children.map((child: any, idx: number) => (
              <p
                key={idx}
                className={`text-[20px] mt-10 ${
                  child?.bold ? "font-bold" : ""
                }`}
              >
                {child.text}
              </p>
            ))}
          </div>
        );
      }
      return null;
    });
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10 h-[130px]"></div>
      <section className="pb-[10%] px-[5%] ">
        <div className="flex items-center">
          <div data-aos="fade-right" className="w-1/2 flex justify-center">
            <Image
              src={"/three_birds.webp"}
              height={500}
              width={500}
              className="w-[90%] h-auto"
              alt="birds"
            />
          </div>
          <div data-aos="fade-left" className="w-1/2">
            <h1 className="text-[20px] xl:text-[30px] font-bold">
              Clarity By CSI
            </h1>
          </div>
        </div>
        <div className="flex justify-between mt-20 border-b border-black pb-5">
          <p>
            <span className="text-[#1F4694] text-[14px] xl:text-[18px]">
              Blog Timeline / Blog / Home
            </span>
          </p>
          <p className="text-[#1F4694] text-[18px] xl:text-[25px]">
            Blog Timeline
          </p>
        </div>
      </section>

      <section className="px-[5%]">
        <h1 className="text-[42px] font-[700] ">
          {post.title} <span className="text-[#1F4694]"></span>
        </h1>
        <div className="flex flex-col gap-5 mt-10">
          {post.layout.map((section: any, idx: number) => (
            <div key={idx}>{renderContent(section.content)}</div>
          ))}
        </div>
        {/* <button>
          <Image
            src={"/download_btn.webp"}
            height={150}
            width={200}
            className="h-[50px] w-auto object-contain mt-20"
            alt="download"
          />
        </button> */}
      </section>

      <footer className="pt-[50px] mt-[350px]">
        <Footer />
      </footer>
    </div>
  );
}
