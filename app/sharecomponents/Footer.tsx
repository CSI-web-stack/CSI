"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="w-screen p-[5%] flex flex-col xl:flex-row text-white justify-between text-[13px] xl:text-[17px] relative bg-[#355496]">
      <div className="w-screen flex z-10 absolute bottom-[99%] xl:bottom-[95%] left-0 ">
        <img
          src={
            pathname === "/our-heart"
              ? "/animation003-blue.gif"
              : pathname === "/coming-soon"
              ? "/animation003-new.gif"
              : "/animation003-new-white-bg.gif"
          }
          alt="tree"
          className="hidden xl:block"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
        <img
          src={
            pathname === "/our-heart"
              ? "/animation-blue-small-k.gif"
              : pathname === "/coming-soon"
              ? "/animation-white-small-k.gif"
              : "/animation-white-small-k.gif"
          }
          alt="tree"
          className=" xl:hidden"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>

      <div className="w-full xl:w-[50%] pt-[50px] md:pt-0 z-20 ">
        <Image
          src={"/logo.webp"}
          height={300}
          width={300}
          className="h-[80px] w-auto object-contain"
          alt="logo"
        />
        <h1 className="font-bold text-[22px] mt-5">Quick Links</h1>
        <div className="flex gap-3 xl:gap-10 mt-5 text-[15px]">
          <Link href={"/learning-program"}>
            <p className="hover:text-[#028676]">Programs</p>
          </Link>
          <Link href={"/see-the-campus"}>
            <p className="hover:text-[#028676]">See The campus</p>
          </Link>
          <Link href={"/interest-form"}>
            <p className="hover:text-[#028676]">Admissions</p>
          </Link>
          <Link href={"/clearity-by-csi"}>
            <p className="hover:text-[#028676]">Clarity by CSI</p>
          </Link>
        </div>
        <h1 className="font-bold text-[22px] mt-5">Follow Us</h1>
        <div className="flex gap-5 mt-5">
          {/* <Image
            src={"/linkedinlogo.webp"}
            height={100}
            width={100}
            className="h-[30px] w-auto object-contain"
            alt="logo"
          /> */}
          <a
            href="https://www.facebook.com/centralschoolinternational"
            target="_blank"
          >
            <Image
              src={"/facebooklogo.webp"}
              height={100}
              width={100}
              className="h-[30px] w-auto object-contain"
              alt="logo"
            />
          </a>
          <a
            href="https://www.instagram.com/central.school.international/?fbclid=IwAR2-tAPKEW4ykF3QuvvUBADiuJxEzVvK3CKJkQU-PceD0p3630Z2wTACHxA"
            target="_blank"
          >
            <Image
              src={"/instagramlogo.webp"}
              height={100}
              width={100}
              className="h-[30px] w-auto object-contain"
              alt="logo"
            />
          </a>
          <a
            href="https://pk.linkedin.com/company/central-school-international?trk=public_post_main-feed-card-text"
            target="_black"
          >
            <Image
              src={"/LinkedinLogo.png"}
              height={100}
              width={100}
              className="h-[30px] w-auto object-contain"
              alt="xlogo"
            />
          </a>
        </div>
        <p className="mt-5 text-[14px]">
          © Central School International 2024 | Terms & Privacy 
        </p>
      </div>
      <div className="w-full xl:w-[30%] flex flex-col items-center justify-center gap-10 mt-20 xl:mt-0">
        <p className="text-center">
          The care, safety and wellbeing of all children, and vulnerable people,
          is a core and fundamental responsibility for our community.
        </p>
        {/* <Image
          src={"/sun.webp"}
          height={400}
          width={400}
          className="h-[150px] w-auto object-contain"
          alt="logo"
        /> */}
      </div>
    </div>
  );
}
