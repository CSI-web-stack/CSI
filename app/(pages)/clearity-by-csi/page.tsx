"use client";
import HomePageCard from "@/app/sharecomponents/HomePageCard";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import Swiper from "@/app/sharecomponents/swiper/Swiper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const array = [1, 2, 3, 4];
export default function Page() {
  const [posts, setPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = async () => {
    try {
      const response = await axios.get(
        "https://csi-cms-af35d1628083.herokuapp.com/api/posts/"
      );
      setPosts(response.data.docs);
    } catch (error) {
      console.log("🚀 ~ getAllPosts ~ error:", error);
    }
  };
  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10 h-[130px]"></div>
      <section className="pb-[10%] px-[5%] ">
        <div className="flex  items-center">
          <div data-aos="fade-right" className="w-[60%] flex justify-center">
            <Image
              src={"/three_birds.webp"}
              height={1000}
              width={1000}
              className="w-[90%] h-auto"
              alt="birds"
            />
          </div>
          <div data-aos="fade-left" className="w-[40%]">
            <h1 className="text-[20px] xl:text-[30px] font-bold">
              Clarity By CSI
            </h1>
          </div>
        </div>
        <div className="flex justify-between mt-20 border-b border-black pb-5 ">
          <p>
            {" "}
            <span className="text-[#1F4694] text-[14px] xl:text-[18px]">
              Blog Timeline / Blog / Home{" "}
            </span>{" "}
          </p>
          <p className="text-[#1F4694] text-[18px] xl:text-[25px]">
            Blog Timeline
          </p>
        </div>
      </section>
      {!selectedBlog ? (
        <section className="px-[5%] flex flex-wrap justify-between gap-14 ">
          {posts.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="border border-black p-5 w-full xl:w-[47%] flex flex-col items-end"
              >
                <Image
                  src={
                    "https://csi-cms-af35d1628083.herokuapp.com" +
                    item.postImage.url
                  }
                  height={1000}
                  width={1000}
                  className="w-full h-[250px] object-contain bg-white"
                  alt="frame"
                />
                <div className="max-w-[80%] flex flex-col items-end">
                  <h2 className="text-end text-[#1F4694]  text-[25px] mt-5">
                    {item.postMeta.title}
                  </h2>
                  <p className="text-end text-[#646464]">
                    {item.postMeta.description}
                  </p>
                  <Link href={"/clearity-by-csi/" + item.id}>
                    <button className="bg-[#1F4694] hover:bg-[#4d6697] rounded-md px-6 py-2 text-white mt-5">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <section className="px-[5%]">
          <h1 className="text-[42px] font-[700] ">
            The Power of <span className="text-[#1F4694]"> Play</span>{" "}
          </h1>
          <div className="flex flex-col gap-5 text-[24px] mt-10">
            <p>
              Welcome to the wonderful world of childhood, where imagination
              knows no bounds and every moment is an adventure waiting to
              unfold! In the realm of early years education, there exists a
              potent force that ignites the flames of creativity, fosters
              cognitive growth, and nurtures emotional resilience-playtime. Yes,
              you heard it right!
            </p>
            <p>
              But what is play, you might ask? Is it merely the act of
              frolicking in the sun or the whimsical dance of children in a
              playground? Far from it! Play is a dynamic process-a ritual that
              transcends time and space, encompassing a kaleidoscope of
              activities, from imaginative play to sensory exploration, from
              rough-and-tumble games to quiet moments of introspection. It is a
              universal language spoken by children of all cultures and
              backgrounds.
            </p>
            <p>
              Yet, beyond its surface value, play holds a deeper meaning-a
              purpose that extends far beyond the idea of entertainment. It is
              through play that children learn to navigate the complexities of
              the world around them, to make sense of their emotions, and to
              forge meaningful connections with others. In the crucible of play,
              young minds are shaped, molded, and transformed, emerging
              stronger, wiser, and more resilient than ever before.
            </p>
            <p>
              It is not merely a frivolous activity but a foundation in the
              developmental journey of young minds. Therefore, let's unpack the
              vibrant landscape of play based learning. uncovering its
              transformative power and the pivotal role it plays in enhancing
              the holistic development of young minds.
            </p>
          </div>
          <button>
            <Image
              src={"/download_btn.webp"}
              height={150}
              width={200}
              className="h-[50px] w-auto object-contain mt-20"
              alt="download"
            />
          </button>
        </section>
      )}
      <footer className="pt-[50px] mt-[100px] xl:mt-[350px]">
        <Footer />
      </footer>
    </div>
  );
}
