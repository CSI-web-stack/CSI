import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
const array = [
  {
    title: "The CSI \n Advantage",
    image: "/s_01.webp",
    description:
      "The CSI Advantage: Cutting edge skills, optimism about the future, a worldview centered on tolerance and hope, confidence in themselves and competence in core academic areas – this is the advantage that CSI students have once they graduate from a holistic learning journey crafted for them at CSI.",
  },
  {
    title: "International \n Expertise",
    image: "/s_02.webp",
    description:
      "International Expertise: At CSI, we believe that your children deserve the absolute best when it comes to their education. Which is why at CSI we have learnt from international experts from Singapore and Britain to bring to your child an education which is world class in nature. From our sports program to our teacher-student ratios, your child’s education has been designed to make them compete with the world’s best and brightest.",
  },
  {
    title: "Rigorous \n Teacher \n Training",
    image: "/s_03.webp",
    description:
      " Rigorous Teacher Training: CSI teachers go through an academically rigorous training process. Our teachers are trained by Trehaus Singapore who are world leaders in early years education and by Cambridge International. Our ongoing in-house professional development programme ensures that our teachers are abreast with the current best practices from around the world and benefit from research and development in education.",
  },
  {
    title: "A 21st Century \n Education",
    image: "/s_04.webp",
    description:
      " A 21st Century Education: The 21st century has created unique and never before seen challenges. These challenges have in turn created the need for a new form of education that provides students with the skills, competencies and character qualities needed to succeed in the dynamic, competitive and global marketplace of today and the future. At CSI, we ensure that our students are prepared to thrive and prosper both today and tomorrow.",
  },
  {
    title: "World Class \n Athletics",
    image: "/s_05.webp",
    description:
      "World Class Athletics: Sports are crucial for both the mental development of a child as well as academic performance. This is why CSI has created a dedicated sports program for its students using state of the art facilities on CSI campuses.",
  },
  {
    title: "Anchored in \n Culture and \n Values",
    image: "/s_06.webp",
    description:
      "Anchored in Culture and Values: We believe that education is something far more profound that just academic competence. At CSI, we are committed to providing an education that nurtures students and helps them build on the cultural contexts and value frameworks from which they come. At CSI, education is rooted in appreciating, celebrating and further exploring the culture and values of our students.",
  },
  {
    title: "Focused on \n  Effective \n Communication",
    image: "/s_07.webp",
    description:
      " Focused on Effective Communication: The ability to communicate effectively has become a critical need in the 21st Century. At CSI we provide an education that emphasizes communication skills in our students. To this end we also offer foreign languages to ensure that our students develop advanced linguistic reasoning ability.",
  },
  {
    title: "Extended  \n Learning \n Program",
    image: "/s_08.webp",
    description:
      " Extended Learning Program: Project and Play Based Learning has been proven to substantially improve students’ academic performance. Our Extended Learning Program is composed of our Co-Curricular, Athletics, and Take Flight Programs and is designed to help your child grow holistically. From stargazing to swimming, CSI offers a comprehensive Extended Learning Program for all of our students.",
  },
  {
    title: "Parent-school \n Community",
    image: "/s_09.webp",
    description:
      "Parent-School Community: At CSI we see parents as equal partners in their children’s schooling. We believe that students thrive in a learning environment which is created by the existence of a vibrant community of parents, teachers, and students. From parent ambassadors to summer camps, at CSI we are characterized by our dynamic and empowering Parent-School Community.",
  },
];
export default function SwiperCompoenent() {
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="ml-[25px] xl:ml-0 bg-transparent w-[100%] flex justify-center relative"
    >
      <div
        style={{
          opacity: isMobile ? 1 : isHovered ? 1 : 0,
          transition: "opacity 1s ease",
        }}
        className="bg-[#EEEEEE] hover:bg-[#028676]  h-[50px] w-[50px] rounded-full flex items-center justify-center left_arrow absolute top-[45%] -left-[10px] xl:left-[15px] z-10 cursor-pointer"
      >
        <Image
          src={"/left_arr.webp"}
          width={30}
          height={30}
          alt="arrow"
          className="h-[20px] w-auto object-contain"
        />
      </div>
      <div
        style={{
          opacity: isMobile ? 1 : isHovered ? 1 : 0,
          transition: "opacity 1s ease",
        }}
        className="bg-[#EEEEEE] hover:bg-[#028676] h-[50px] w-[50px] rounded-full flex items-center justify-center right_arrow absolute top-[45%] right-[40px] xl:right-20 z-10 cursor-pointer"
      >
        <Image
          src={"/left_arr.webp"}
          width={30}
          height={30}
          alt="arrow"
          className="h-[20px] w-auto object-contain rotate-180"
        />
      </div>
      <div className="w-[80%] xl:w-full h-full">
        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          // spaceBetween={50}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".left_arrow",
            prevEl: ".right_arrow",
          }}
          className="bg-transparent"
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          {array.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`w-[350px] 2xl:w-[450px]  bg-transparent `}
              data-aos={fadeAnimation}
            >
              <>
                {selectedIndex === index ? (
                  <div
                    className={`bg-[#028676] mb-5 xl:mb-0 h-[100%]  ml-[10px] mt-[40px] 2xl:mt-[80px] w-[85%] xl:w-[90%] rounded-md p-3 duration-500 `}
                  >
                    <div className="h-[50px] w-full flex justify-end px-5">
                      <p
                        onClick={() => setSelectedIndex(null)}
                        className="text-white font-bold text-[20px] cursor-pointer"
                      >
                        ╳
                      </p>
                    </div>

                    <p className="text-white px-5 font-bold text-[15px] 2xl:text-[20px] text-start">
                      {item.description.split(":")[0] + ":"}
                    </p>
                    <p className="text-white mt-2 px-5  text-[13px] 2xl:text-[17px] text-start">
                      {item.description.split(":")[1]}
                    </p>
                  </div>
                ) : (
                  <div
                    style={{
                      boxShadow: "0 0 5px 1px #CCC",
                    }}
                    className=" bg-white rounded mb-5 xl:mb-0 mr-[60px] xl:mr-[40px] ml-[10px] max-h-[570px]"
                  >
                    <div className="w-full h-[160px] 2xl:h-[260px] overflow-hidden mt-10 2xl:mt-20 flex items-center">
                      <Image
                        alt="image"
                        src={item.image}
                        height={500}
                        width={500}
                        objectFit="contain"
                        style={{
                          objectFit: "contain",
                        }}
                        className="w-[80%] h-[140px] 2xl:h-[240px] object-contain  hover:scale-125 duration-1000 ease-in-out "
                      />
                    </div>
                    <div className="px-10 mt-5 w-full flex flex-col items-start ">
                      <div className="h-[150px] 2xl:h-[200px]">
                        {item.title.split("\n").map((line, i) => (
                          <h1
                            key={i}
                            className="font-bold text-black text-[20px] 2xl:text-[30px] text-start "
                          >
                            {line}
                          </h1>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedIndex(index);
                          setFadeAnimation;
                        }}
                        className="bg-[#028676] hover:bg-[#25524c] text-[14px] 2xl:text-[20px] rounded-full text-white px-10 py-3 mb-5 2xl:mb-10"
                      >
                        See More
                      </button>
                    </div>
                  </div>
                )}
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
