"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const array = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Admission",
    link: "/admission",
  },
  {
    name: "Programs",
    link: "/learning-program",
  },
];
export default function Navbar() {
  const pathname = usePathname();

  const [isHeaderShow, setIsHeaderShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHambergerShow, setIsHambergerShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  let color =
    pathname === "/coming-soon" && !isHeaderShow
      ? "white"
      : pathname === "/" && !isHeaderShow
      ? "white"
      : pathname !== "/"
      ? "#355496"
      : !isHeaderShow
      ? "white"
      : "#355496";
  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset;
      //when the user scrolls down 20px from the top of the document, show the button
      if (st < 10) {
        setIsHeaderShow(false);
      } else if (st > lastScrollTop) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(true);
      }
    };
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsHambergerShow(false);
      setIsClosing(false);
    }, 1000);
  };
  return (
    <header>
      <div
        style={{
          backgroundColor: isHeaderShow ? "white" : "transparent",
          transition: `background-color 1s ease${
            isHeaderShow ? ", border 1s ease" : ""
          }`,
          borderBottom: isHeaderShow ? "1px solid lightgrey" : "",

          opacity: 1,
          color: color,
        }}
        className={`hidden lg:flex text-[16px] 2xl:text-[18px] justify-center fixed top-0 left-0 w-full h-[120px] items-center  uppercase z-50 
         
        `}
      >
        <div className="flex w-[80%] items-end justify-between ">
          <div className="w-[40%] 2xl:w-[30%] flex justify-between">
            <Link href={"/coming-soon"}>
              <h1 className="hover:text-[#028676] cursor-pointer">Programs</h1>
            </Link>
            <Link href={"/coming-soon"}>
              <h1 className="hover:text-[#028676] cursor-pointer">
                See The campus
              </h1>
            </Link>
            <Link href={"/coming-soon"}>
              <h1 className="hover:text-[#028676] cursor-pointer">
                Admissions
              </h1>
            </Link>
          </div>
          <div className="w-[25%] 2xl:w-[30%] flex justify-center">
            <Link href={"/"}>
              <Image
                src={
                  pathname === "/coming-soon" && !isHeaderShow
                    ? "/logo.webp"
                    : pathname !== "/" || isHeaderShow
                    ? "/logo_blue.webp"
                    : "/logo.webp"
                }
                height={200}
                width={200}
                className="h-[50px] 2xl:h-[80px] w-auto object-contain"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-[40%] 2xl:w-[30%]  flex justify-between">
            <div className="flex-1">
              <Link href={"/coming-soon"}>
                <h1 className="hover:text-[#028676] cursor-pointer">
                  Know more
                </h1>
              </Link>
            </div>
            <div className="flex-1">
              <Link href={"/our-heart"}>
                <h1 className="hover:text-[#028676] cursor-pointer">
                  Our heart
                </h1>
              </Link>
            </div>
            <div className="flex-1">
              <Link href={"/coming-soon"}>
                <h1 className="hover:text-[#028676] cursor-pointer">
                  inquire today
                </h1>
              </Link>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url(/icons_bg.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute top-0 right-0 w-[180px] h-[30px] flex justify-center items-center"
          >
            <div className="flex items-center gap-3">
              <Image src={"/XLogo.webp"} width={20} height={20} alt="xlogo" />
              <Image
                src={"/YoutubeLogo.webp"}
                width={20}
                height={20}
                alt="xlogo"
              />
              <Image
                src={"/FacebookLogo.webp"}
                width={20}
                height={20}
                alt="xlogo"
              />
              <Image
                src={"/InstagramLogo.webp"}
                width={20}
                height={20}
                alt="xlogo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed top-0 right-0 z-30 w-full overflow-hidden">
        <div
          style={{
            backgroundColor: isHeaderShow ? "white" : "transparent",
            transition: "background-color 1s ease",
            borderBottom: isHeaderShow ? "1px solid grey" : "",
          }}
          className="py-5 h-[120px] flex justify-between items-center px-7"
        >
          <Link href={"/"}>
            <Image
              src={"/logo_blue.webp"}
              alt="logo"
              width={200}
              height={200}
              className="cursor-pointer hover:animate-pulse h-[50px] w-auto object-contain"
            />
          </Link>
          <Image
            src={"/options.webp"}
            alt="logo"
            width={50}
            height={30}
            onClick={() => setIsHambergerShow(true)}
            className="cursor-pointer hover:animate-pulse h-[30px] w-auto object-contain"
            style={{
              filter: isHeaderShow
                ? ""
                : pathname == "/"
                ? "invert(1)"
                : pathname === "/admission"
                ? "invert(1)"
                : "",
            }}
          />
        </div>
      </div>
      {isHambergerShow && (
        <div
          data-aos="fade-right"
          className={`${
            isClosing ? "fade-left" : ""
          } lg:hidden flex flex-col items-center fixed top-0 left-0 h-screen w-screen z-50 bg-[#028676]`}
        >
          <div className="w-full flex items-end justify-end p-5">
            <Image
              src={"/X.webp"}
              alt="logo"
              width={50}
              height={30}
              onClick={handleCloseMenu}
              className="cursor-pointer hover:animate-pulse h-[50px] object-contain"
            />
          </div>
          <Image
            src={"/logo.webp"}
            alt="logo"
            width={100}
            height={80}
            className="cursor-pointer hover:animate-pulse h-[60px] w-auto mt-10 object-contain"
          />
          <div className="flex flex-col space-y-5 text-white mt-10">
            {array?.map((item, index) => (
              <Link
                href={item.name !== "Services" ? item.link : ""}
                key={index}
                className="relative"
              >
                <p
                  style={{
                    color: pathname === item.link ? "#93F1FE" : "white",
                  }}
                  className="cursor-pointer transform hover:text-[#93F1FE]"
                >
                  {item.name}
                </p>
                <div></div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
