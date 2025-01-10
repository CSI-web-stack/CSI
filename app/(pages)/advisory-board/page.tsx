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
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="h-[130px]"></div>
      <section
        data-aos="fade-down"
        className="w-full px-4 md:px-10 flex justify-center items-center"
      >
        <div className="relative w-full h-[300px] xl:h-[calc(45vh)] overflow-hidden">
          <Image
            src="/adv_board_1.webp"
            layout="fill"
            objectFit="contain"
            alt="student well being"
          />
        </div>
      </section>
      <section className="mt-5">
        <div className="bg-[#F1F1F1] w-full px-20 py-10 2xl:py-20 ">
          <h1 className="text-[40px] xl:text-[52px] font-[700] text-center text-black">
            Advisory Board
          </h1>
          <p className="mt-10 text-[14px] xl:text-[18px] text-black">
            Our Advisory Board brings significant expertise, experience and
            strategic insight to CSI. Comprised of practitioners, policy experts
            and leading academics, the CSI Advisory Board ensures that CSl is
            well equipped to respond to the changing challenges and
            circumstances of schooling and education in the 21st century. The
            diversified experience of our Board ensures that from academic depth
            to skills acquisition to real world applicability, education at CSI
            is always of the highest quality.
          </p>
        </div>
      </section>
      <section className="px-8 xl:px-20 mt-5">
        <div className="flex items-center flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-[20%]">
            <Image
              src={"/adv_board_2.webp"}
              height={500}
              width={500}
              alt="member"
              className="h-auto w-[90%] object-contain "
            />
          </div>
          <p className="w-full xl:w-[80%] text-black">
            Akbar Hussain Durrani, Tamgha-e-Imtiaz, is currently serving as the
            Chairman of the Federal Public Service Commission. Over the span of
            his illustrious career, Mr. Durrani has served as the Chief
            Secretary of Punjab, Federal Secretary Education and Professional
            Training, and Federal Secretary Inter-Provincial Coordination. From
            2005 to 2008, Mr. Durrani also served as the Provincial Head of
            Education Sector Reforms Assistance (ESRA), a program of USAID,
            where he focused on policy and planning, professional development,
            adult and youth literacy, and public private partnership. In this
            role, Mr. Durrani also contributed greatly to reforms within primary
            education. Through his expansive experience of meaningful action,
            practice and public service, Mr. Durrani helps CSI shape its
            programs to ensure that our students celebrate their civic duty and
            recognize the importance of action.
          </p>
        </div>
        <div className="flex items-center flex-col-reverse xl:flex-row gap-10 mt-20">
          <p className="w-full xl:w-[80%] text-black">
            Dr. Faisal Bari has served as the Dean of the School of Education at
            the Lahore University of Management Science (LUMS), Pakistan and as
            a Board Member of the Punjab Examination Commission. Dr. Bari
            received his doctorate from McGill University, Canada, and is a
            renowned researcher whose research interests include gender
            representation in textbooks, the political economy of teacher
            recruitment and retention, and the role of the private sector in
            education reform. Dr. Bari brings a profound understanding of the
            academic needs of students in the 21st Century to CSI to ensure that
            our students develop the cognitive capabilities, and habits of
            thought needed to succeed in today's world.
          </p>
          <div className="w-full xl:w-[20%]">
            <Image
              src={"/adv_board_3.webp"}
              height={500}
              width={500}
              alt="member"
              className="h-auto w-[90%] object-contain "
            />
          </div>
        </div>
        <div className="flex items-center flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-[20%]">
            <Image
              src={"/adv_board_4.webp"}
              height={500}
              width={500}
              alt="member"
              className="h-auto w-[90%] object-contain "
            />
          </div>
          <p className="w-full xl:w-[80%] text-black">
            Qualified in Curriculum and Teaching, with a special focus on Early
            Childhood from the world leading Teachers College, Columbia
            University, USA, Ms. Umbreen Arif has more than two decades of
            experience in education sector reforms focusing on improving the
            quality of teachers and student learning outcomes. She is recognized
            for system strengthening and improving education governance. Her
            experience spans across Pakistan, India, Zanzibar (Tanzania),
            Somalia and Afghanistan. She has contributed to early childhood
            education programs in Senegal, Indonesia and Tanzania. She has also
            served as an Education Advisor to the Federal Government of
            Pakistan. Umbreen Arif brings international experience, a deep
            understanding of the education sector of Pakistan and a diverse
            range of expertise, allowing us to ensure that our students have a
            larger view of the landscape in which they and CSI exist.
          </p>
        </div>
      </section>

      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
