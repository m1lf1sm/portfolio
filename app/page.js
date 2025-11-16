
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, scale } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });}

  return (
    <div className="bg-[url('/backgroun.jpg')] bg-cover bg-center bg-repeat overflow-x-hidden">
      {/* HOME SECTION */}

      
      <section id="home" className="scale-90 mt-[3rem] pb-20 lg:min-h-screen lg:flex lg:flex-col lg:items-center lg:justify-center lg:relative  lg:px-4 sm:px-6 lg:px-8 lg:mt-[-2rem] ">
        <motion.div className=" relative flex w-full mt-[-2rem] lg:inset-0 lg:max-w-3xl lg:justify-center lg:top-[3rem] lg:sm:top-[4rem] lg:top-[5rem]">
          <Image
            src="/home/portfolio1.png"
            alt="Mahnoor's Portfolio"
            width={800}
            height={400}
            className="absolute object-contain w-full  sm:max-w-2xl  z-2 animate-flicker max-w-3xl"
          />
          <Image
            src="/home/portfolio2.png"
            alt="Mahnoor's Portfolio"
            width={800}
            height={400}
            className="object-contain w-full sm:max-w-2xl max-w-3xl z-2 animate-flicker2 "
          />
        </motion.div>

        {/* Main container with relative positioning */}
        <div className="pointer-events-none lg:items-center lg:justify-center lg:relative lg:w-full lg:max-w-sm sm:max-w-md lg:max-w-xl lg:aspect-square top-[-4rem] sm:top-[-6rem] lg:mt-[10rem]">
          {/* Center Avatar */}
          <div className="absolute inset-0 w-full flex items-center justify-center mt-[-15rem]">
            <Image
              src="/home/avatar.png"
              alt="Avatar"
              width={500}
              height={500}
              className="lg:object-contain lg:w-full z-1"
            />
          </div>

          {/* About Button - Left side, middle */}
          <motion.div
            onClick={() => scrollToSection("about")}
            whileHover={{ rotate: -15 }}
            transition={{ duration: 0, type: "tween", ease: "linear" }}
            className="z-50 mt-[22rem] lg:absolute lg:left-[-8rem] sm:left-[-12rem] lg:left-[-20rem] lg:mt-[-5rem] lg:scale-120 sm:top-12/20 lg:-translate-y-1/2 z-10 lg:w-32 sm:w-40 lg:w-52 lg:rotate-[15deg]"
          >
            <Image
              src="/home/about1.png"
              alt="About"
              width={200}
              height={180}
              className="lg:object-contain lg:w-full"
            />
          </motion.div>

          {/* My Work Button - Right side, middle */}
          <motion.div
            onClick={()=>scrollToSection("work")}
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0, type: "tween", ease: "linear" }}
            className="mt-[-5rem] ml-[15rem] scale-180 sm:ml-[15rem] lg:absolute lg:right-[-8rem] sm:right-[-12rem] lg:scale-120 lg:right-[-20rem] mt-1/2 sm:top-12/20 lg:-translate-y-1/2 z-10 w-32 sm:w-40 lg:w-52 lg:rotate-[-15deg]"
          >
            <Image
              src="/home/my work 1.png"
              alt="My Work"
              width={200}
              height={180}
              className="lg:object-contain lg:w-full"
            />
          </motion.div>

          {/* Contact Button - Bottom center */}
          <motion.div
            onClick={()=>scrollToSection("contact")}
            whileHover={{ rotate: -15 }}
            transition={{ duration: 0, type: "tween", ease: "linear" }}
            className="ml-[6rem] mt-[1rem] lg:absolute lg:left-40 lg:-translate-x-1/2 lg:z-10 lg:w-32 sm:w-40 lg:w-52 lg:mt-[-3rem] sm:top-[28rem] lg:scale-120 lg:rotate-[-10deg]"
          >
            <Image
              src="/home/contact1.png"
              alt="Contact"
              width={200}
              height={180}
              className="lg:object-contain lg:w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* WHO AM I SECTION */}
      <section id="about" className="scale-90 lg:relative lg:max-w-7xl lg:mx-auto lg:px-4 sm:px-6 lg:px-8 lg:py-30 sm:py-10 lg:py-10 flex flex-col lg:flex-row lg:w-full lg:items-start md:top-[10rem] sm:top-[8rem] lg:mt-[-15rem] lg:scale-80">
        {/* Left Stack */}
        <div className="lg:flex-1 lg:flex lg:flex-col lg:gap-4 sm:gap-6 lg:gap-8 z-10 lg:max-w-5xl lg:w-full lg:mt-[10rem]">
          <Image
            src="/about/whoami.png"
            alt="Image 1"
            width={600}
            height={400}
            className="py-1 lg:relative lg:object-contain lg:left-0 sm:left-[-5rem] lg:ml-[-10rem] sm:top-[-5rem] lg:mt-[-10rem] w-full sm:w-auto"
          />
          <Image
            src="/about/abouttext1.png"
            alt="Image 2"
            width={600}
            height={400}
            className="py-2 lg:relative lg:object-contain sm:top-[-6rem] lg:mt-[-2rem] lg:left-0 sm:left-[-0.5rem] lg:left-[-1rem] lg:w-full sm:w-auto"
          />
          <Image
            src="/about/abouttext2.png"
            alt="Image 3"
            width={600}
            height={400}
            className="py-2 lg:relative lg:object-contain lg:mt-[8rem] sm:top-[-6rem] lg:top-[-12rem] left-0 sm:left-[-3rem] lg:left-[-6rem] lg:w-full sm:w-auto"
          />
          <Image
            src="/about/abouttext3.png"
            alt="Image 4"
            width={600}
            height={400}
            className="py-2 lg:relative lg:object-contain top-0 sm:top-[-5rem] lg:top-[-10rem] lg:right-0 sm:right-[-5rem] lg:right-[-1rem] lg:scale-100 sm:scale-125 lg:scale-150 lg:w-full sm:w-auto"
          />
          <Image
            src="/about/abouttext4.png"
            alt="Image 4"
            width={600}
            height={400}
            className="py-2 lg:relative lg:object-contain top-0 sm:top-[-5rem] lg:top-[-5rem] lg:right-0 sm:right-[-5rem] lg:right-[-1rem] lg:scale-100 sm:scale-125 lg:scale-150 lg:w-full sm:w-auto"
          />
        </div>

        {/* Right Side */}
        <div className="py-[-1rem] lg:flex-1 lg:flex lg:justify-center lg:items-start lg:max-w-6xl lg:scale-100 sm:scale-125 lg:scale-150 top-0 lg:top-[-10rem] mt-8  lg:mt-[10rem]">
          <Image
            src="/about/aboutimage.png"
            alt="About Image"
            width={500}
            height={700}
            className="lg:relative lg:object-contain z-4 lg:w-full sm:w-auto"
          />
        </div>
      </section>

      <div className="scale-90 mt-[-3rem] py-2 lg:flex-row lg:justify-center lg:align-center lg:items-start lg:scale-[0.5] sm:scale-125 lg:scale-60 sm:px-6 lg:px-8 lg:mt-[-21rem]">
        <Image
          src="/about/abouttext5.png"
          alt="Image 5"
          width={600}
          height={400}
          className="lg:relative lg:object-contain w-full top-[1rem] sm:top-[1.5rem] lg:top-[30rem]"
        />
      </div>
      {/* MY WORK SECTION */}
      <section id="work" className="lg:relative lg:flex-column lg:justify-center lg:w-full lg:max-w-2xl lg:py-16 sm:py-24 lg:py-30 lg:mx-auto sm:px-6 lg:px-8 lg:py-[10rem] lg:mt-[10rem]">

        <motion.div>
          <Image
            src="/mywork/what do i dopng.png"
            alt="what do i do?"
            width={600}
            height={400}
            className="scale-90 lg:relative lg:object-contain lg:w-full lg:scale-100 sm:scale-110 lg:scale-120 "
          />
        </motion.div>
        
        <div className="relative flex flex-col scale-70 mt-[-5rem] sm:flex-row lg:justify-center lg:w-full lg:max-w-2xl lg:py-8 sm:py-32 lg:py-50 lg:scale-125 sm:scale-150 lg:scale-200 gap-4 sm:gap-0 lg:mt-[-2rem]">
          <Link href="/illustrations">
          <motion.div 
            className="lg:relative lg:flex lg:px-4 sm:px-6 lg:px-10 lg:justify-center" 
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <Image
              src={hovered1
                ? "/mywork/illustration button 2.png"
                : "/mywork/illustration button 1.png"
              }
              alt="illustrations"
              width={600}
              height={400}
              className="mt-[-4rem] lg:mt-0 lg:relative lg:object-contain lg:w-full"
            />
          </motion.div>
          </Link>

          <Link href="/graphic-design">
          <motion.div 
            className="lg:relative lg:flex lg:px-4 sm:px-6 lg:px-10 lg:justify-center" 
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <Image
              src={hovered2
                ? "/mywork/graphic design button 2.png"
                : "/mywork/graphic design button 1.png"
              }
              alt="illustrations"
              width={600}
              height={400}
              className="py-8 lg:py-0 lg:relative lg:object-contain lg:w-full"
            />
          </motion.div>
          </Link>
        </div>
      </section>

      {/* LET'S TALK SECTION */}
      <section id="contact" className="lg:relative lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-4 sm:px-6 lg:px-8 lg:scale-90 2xl:mt-[15rem] 2xl:scale-75 lg:mt-[10rem]">
        <div className="lg:relative lg:flex lg:max-w-2xl lg:w-full lg:justify-center z-10">
          <motion.div>
            <Image
              src="/contact/lets talk.png"
              alt="lets talk"
              height={600}
              width={400}
              className="lg:relative lg:flex lg:w-full lg:scale-100 sm:scale-105 2xl:scale-150 lg:scale-110 left-0 sm:left-[-8rem] 2xl:left-[-20rem] lg:left-[-8rem]"
            />
          </motion.div>
        </div>

        <div className="z-9 scale-50 lg:relative lg:flex lg:flex-col lg:flex-row w-full lg:justify-center lg:items-center lg:mx-auto lg:px-4 sm:px-8 lg:px-80 gap-8 lg:gap-0 lg:scale-120 ">
          <motion.div className=" relative flex lg:w-full lg:max-w-xs lg:justify-center mt-[2rem] sm:mt-[3rem] lg:mt-[0rem] lg:left-[-10rem] 2xl:left-[-20rem] 2xl:scale-100 2xl:mt-[5rem] scale-80">
            <Image
              src="/contact/phone 1.png"
              alt="Phone1"
              width={800}
              height={400}
              className="lg:object-contain lg:w-full z-2 animate-flicker "
            />
            <Image
              src="/contact/phone 2.png"
              alt="Phone2"
              width={800}
              height={400}
              className="lg:object-contain lg:w-full z-2 animate-flicker2 absolute"
            />
          </motion.div>
          
          <div className="lg:relative lg:flex lg:flex-col lg:items-center lg:items-start">
            <motion.div className="scale-240 mt-[-52rem] ml-30 lg:flex lg:justify-center lg:justify-right lg:scale-100 sm:scale-100 lg:scale-180 2xl:scale-180 2xl:left[-10rem] lg:mt-[5rem]">
              <Image
                src="/contact/wombat.png"
                alt="Wombat"
                width={500}
                height={700}
                className="lg:relative lg:object-contain right-0  lg:mt-[-1rem] lg:left-15 2xl:scale-90 2xl:left-[15rem] 2xl:mt-[5rem] "
              />
            </motion.div>
            <Link href="mailto:mahnoorzahid7287@gmail.com">
            <motion.div className="z-30 lg:flex lg:justify-center lg:justify-right lg:scale-100 sm:scale-125 lg:scale-100 lg:left-[-5rem]">
              <Image
                src="/contact/text 1.png"
                alt="contact1"
                width={500}
                height={700}
                className="lg:relative lg:object-contain right-0 lg:right-[-10rem] top-0 lg:mt-[-1rem] 2xl:mt-[rem] left-[-1rem] hover:scale-[1.1] "
              />
            </motion.div>
            </Link>
            <Link href="https://www.instagram.com/ultraveye" target="_blank" rel="noopener noreferrer">
            <motion.div className="z-30 lg:flex lg:justify-center lg:justify-right lg:scale-100 sm:scale-125 ">
              <Image
                src="/contact/text 2.png"
                alt="contact2"
                width={500}
                height={700}
                className="lg:relative lg:object-contain lg:w-full lg:max-w-xs z-4 right-0 lg:right-[-1rem] lg:scale-80  2xl:left-[13rem] hover:scale-[1.1]"
              />
            </motion.div>
            </Link>
          </div>
        </div>                                        
      </section>
    </div>
  );
}

