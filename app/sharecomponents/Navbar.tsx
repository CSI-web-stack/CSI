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
    name: "See The Campus",
    link: "/see-the-campus",
  },
  {
    name: "Admissions",
    link: "/interest-form",
  },
  {
    name: "Know More",
    link: "",
  },
  {
    name: "Our Heart",
    link: "/our-heart",
  },
  {
    name: "Programs",
    link: "/learning-program",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];
let knowMoreArray = [
  {
    name: "Clarity by CSI",
    link: "/clearity-by-csi",
  },
  {
    name: "For Teachers",
    link: "/teacher-registeration-form",
  },
  {
    name: "From The Principal",
    link: "/from-the-principle",
  },
  {
    name: "Academic Council",
    link: "/academic-councel",
  },
  {
    name: "Our Advisory Board",
    link: "/advisory-board",
  },
  {
    name: "Student Well-Being",
    link: "/student-well-being",
  },
];
export default function Navbar() {
  const pathname = usePathname();

  const [isHeaderShow, setIsHeaderShow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHambergerShow, setIsHambergerShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  console.log("🚀 ~ Navbar ~ showDropDown:ads", showDropDown);

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
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsHambergerShow(false);
      setIsClosing(false);
    }, 1000);
  };
  return (
    <header style={{ zIndex: 9 }}>
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
        className={`hidden lg:flex text-[16px] 2xl:text-[18px] justify-center fixed top-0 left-0 w-full h-[120px] items-center z-50 
         
        `}
      >
        <div className="flex w-[80%] font-[700] text-[16px] items-end justify-between ">
          <div className="w-[40%] 2xl:w-[30%] flex justify-between">
            <Link href={"/learning-program"}>
              <h1 className="hover:text-[#028676] cursor-pointer">PROGRAMS</h1>
            </Link>
            <Link href={"/see-the-campus"}>
              <h1 className="hover:text-[#028676] cursor-pointer">
                SEE THE CAMPUS
              </h1>
            </Link>
            <Link href={"/interest-form"}>
              <h1 className="hover:text-[#028676] cursor-pointer">
                ADMISSIONS
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
            <div
              onMouseLeave={() => setShowDropDown(false)}
              className="flex-1 mr-5 relative z-20"
            >
              <button
                onClick={() => setShowDropDown(!showDropDown)}
                onMouseEnter={() => setShowDropDown(true)}
                className="flex items-center gap-2 z-20"
              >
                <h1 className="hover:text-[#028676] cursor-pointer">
                  KNOW MORE
                </h1>
                <Image
                  src={"/CaretDown.webp"}
                  height={10}
                  width={10}
                  alt="caredown"
                />
              </button>
              {showDropDown && (
                <div className="flex flex-col p-5 text-[#1F4694]  text-[20px] z-0 font-[400] gap-5 absolute top-full bg-white rounded-b-xl -left-[70px] w-[260px]">
                  <Link href={"/clearity-by-csi"}>
                    <p className="hover:text-[#028676] hover:scale-110  ease-in-out duration-300">
                      Clarity by CSI
                    </p>
                  </Link>
                  <Link href={"/teacher-registeration-form"}>
                    <p className="hover:text-[#028676] hover:scale-110  ease-in-out duration-300">
                      For Teachers
                    </p>
                  </Link>
                  <Link href={"/from-the-principle"}>
                    <p className="hover:text-[#028676] hover:scale-110  ease-in-out duration-300">
                      From the Principal
                    </p>
                  </Link>
                  <Link href={"/advisory-board"}>
                    <p className="hover:text-[#028676] hover:scale-110  ease-in-out duration-300">
                      Our Advisory Board
                    </p>
                  </Link>
                  <Link href={"/academic-councel"}>
                    <p className="hover:text-[#028676] hover:scale-110  ease-in-out duration-300">
                      Academic Council
                    </p>
                  </Link>
                  <Link href={"/student-well-being"}>
                    <p className="hover:text-[#028676] hover:scale-110  ease-in-out duration-300">
                      Student Well-being
                    </p>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex-1">
              <Link href={"/our-heart"}>
                <h1 className="hover:text-[#028676] cursor-pointer">
                  OUR HEART
                </h1>
              </Link>
            </div>
            <div className="flex-1">
              <Link href={"/contact-us"}>
                <h1 className="hover:text-[#028676] cursor-pointer">
                  CONTACT US
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
              <a
                href="https://pk.linkedin.com/company/central-school-international?trk=public_post_main-feed-card-text"
                target="_black"
              >
                <Image
                  src={"/LinkedinLogo.png"}
                  width={20}
                  height={20}
                  alt="xlogo"
                />
              </a>
              <a
                href="https://www.instagram.com/central.school.international/?fbclid=IwAR2-tAPKEW4ykF3QuvvUBADiuJxEzVvK3CKJkQU-PceD0p3630Z2wTACHxA"
                target="_blank"
              >
                <Image
                  src={"/InstagramLogo.png"}
                  width={20}
                  height={20}
                  alt="xlogo"
                />
              </a>
              <a
                href="https://www.facebook.com/centralschoolinternational"
                target="_blank"
              >
                <Image
                  src={"/FacebookLogo.png"}
                  width={20}
                  height={20}
                  alt="xlogo"
                />
              </a>
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
          className="py-5 h-[80px] flex justify-between items-center px-7"
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
          } lg:hidden flex flex-col items-center fixed top-0 left-0 h-screen w-screen z-50 bg-[#1f4694]`}
        >
          <div className="w-full flex items-center justify-between p-5 bg-[#355496]">
            <Image
              src={"/logo.webp"}
              alt="logo"
              width={100}
              height={80}
              className="cursor-pointer hover:animate-pulse h-[60px] w-auto  object-contain"
            />
            <Image
              src={"/cross_icon.webp"}
              alt="logo"
              width={50}
              height={30}
              onClick={handleCloseMenu}
              className="cursor-pointer hover:animate-pulse h-[30px] object-contain"
            />
          </div>

          <div className="flex flex-col space-y-3 text-white mt-10 w-full">
            {array?.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="relative border-b-[1px] border-white pb-2"
              >
                <p
                  style={{
                    color: pathname === item.link ? "#93F1FE" : "white",
                  }}
                  className="cursor-pointer transform hover:text-[#93F1FE] text-[22px] font-[700] px-5"
                >
                  {item.name}
                </p>

                {item.link === "" && (
                  <div className="flex flex-col gap-2">
                    {knowMoreArray.map((tab, _index) => (
                      <Link href={tab.link} key={_index}>
                        <p className="text-[16px] font-[400] px-5">
                          {tab.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
