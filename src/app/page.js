"use client";
import Image from "next/image";
import { motion, scale } from "framer-motion";
import { useRef, useState } from "react";
export default function Home() {
        const [hovered1, setHovered1] = useState(false);
        const [hovered2, setHovered2] = useState(false);
  return (

  <div className="bg-[url('/backgroun.jpg')] bg-cover bg-center bg-repeat ">
      <div className="min-h-screen flex flex-col items-center justify-center relative top-[-4rem]">
        <motion.div className="relative flex w-full inset-0 max-w-3xl justify-center top-[5rem]">
          <Image
            src="/home/portfolio1.png"
            alt="Mahnoor's Portfolio"
            width={800}
            height={400}
            className="object-contain w-10/10 max-w-3xl z-2 animate-flicker"
          />
          <Image
            src="/home/portfolio2.png"
            alt="Mahnoor's Portfolio"
            width={800}
            height={400}
            className="object-contain w-10/10 max-w-3xl z-2 animate-flicker2 absolute"
          />
        </motion.div>

        {/* Main container with relative positioning */}
        <div className="items-center justify-center relative w-full max-w-xl aspect-square top-[-8rem]">
          {/* Center Avatar */}
          <div className="absolute inset-0 w-full flex items-center justify-center">
            <Image
              src="/home/avatar.png"
              alt="Avatar"
              width={500}
              height={500}
              className="object-contain w-8/10 w-full z-1"
            />
          </div>

          {/* About Button - Left side, middle */}
          <motion.div
            whileHover={{ rotate: -15 }}
            transition={{ duration: 0, type: "tween", ease: "linear" }}
            className="absolute left-0 top-12/20 -translate-y-1/2 translate-x-0 z-10 w-(2.5)/3 left-[-20rem] rotate-[15deg]"
          >
            <Image
              src="/home/about1.png"
              alt="About"
              width={200}
              height={180}
              className="object-contain w-full"
            />
          </motion.div>

          {/* My Work Button - Right side, middle */}
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0, type: "tween", ease: "linear" }}
            className="absolute right-0 top-12/20 -translate-y-1/2 -translate-x-0 z-10 w-(2.5)/3 right-[-20rem] rotate-[-15deg]"
          >
            <Image
              src="/home/my work 1.png"
              alt="My Work"
              width={200}
              height={180}
              className="object-contain w-full"
            />
          </motion.div>

          {/* Contact Button - Bottom center */}
          <motion.div
            whileHover={{ rotate: -15 }}
            transition={{ duration: 0, type: "tween", ease: "linear" }}
            className="absolute bottom-25 left-9/20 -translate-x-1/2 z-10 w-(2.5)/3 max-w-3xl top-[32rem] rotate-[-10deg]"
          >
            <Image
              src="/home/contact1.png"
              alt="Contact"
              width={200}
              height={180}
              className="object-contain w-full max-w-3xl"
            />
          </motion.div>
        </div>

        {/* About Section */}
        <div className="relative max-w-7xl mx-auto px-8 py-24 flex flex-row  w-full items-start top-[10rem]">
          {/* Left Stack */}
          <div className="flex-1 flex flex-col gap-8 z-10 max-w-5xl">
            <Image
              src="/about/whoami.png"
              alt="Image 1"
              width={600}
              height={400}
              className="relative object-contain left-[-10rem] top-[-10rem]"
            />
            <Image
              src="/about/abouttext1.png"
              alt="Image 2"
              width={600}
              height={400}
              className="relative object-contain top-[-12rem] left-[-1rem]"
            />
            <Image
              src="/about/abouttext2.png"
              alt="Image 3"
              width={600}
              height={400}
              className="relative object-contain top-[-12rem] left-[-6rem]"
            />
            <Image
              src="/about/abouttext3.png"
              alt="Image 4"
              width={600}
              height={400}
              className="relative object-contain top-[-10rem] right-[-10rem] scale-150" 
            />

          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center items-start max-w-6xl scale-150 top-[-10rem]">
            <Image
              src="/about/aboutimage.png"
              alt="About Image"
              width={500}
              height={700}
              className="relative object-contain  z-4"
            />
          </div>
        </div>

        <div className="flex-row justify-center align-center items-start scale-150">
              <Image
              src="/about/abouttext4.png"
              alt="Image 5"
              width={600}
              height={400}
              className="relative object-contain w-full top-[2rem]"
            />
        </div>

        <div className="relative flex-column justify-center w-full max-w-2xl py-35">

          <motion.div>
            <Image
             src="/mywork/what do i dopng.png"
             alt="what do i do?"
             width={600}
             height={400}
             className="relative object-contain w-full scale-120" />
          </motion.div>
          <div className="relative flex justify-center w-full max-w-2xl py-50 scale-200">

            <motion.div className="relative flex  px-10" 
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}>
              <Image
                src = {hovered1
                    ? "/mywork/illustration button 2.png" // shown on hover
                    : "/mywork/illustration button 1.png" // default image
                  }
              alt ="illustrations"
              width={600}
              height={400}
              className="relative object-contain "
              />
              
            </motion.div>
            <motion.div className="relative flex px-10" 
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}>
            <Image
            src = {hovered2
                    ? "/mywork/graphic design button 2.png" // shown on hover
                    : "/mywork/graphic design button 1.png" // default image
                  }
            alt ="illustrations"
            width={600}
            height={400}
            className="relative object-contain "
            />
              
            </motion.div>
          </div>

        </div>
        
      <div className="relative flex max-w-2xl w-full justify-center  " >
        <motion.div>
          <Image
          src="/contact/lets talk.png"
          alt="lets talk"
          height={600}
          width={400}
          className="relative flex w-full align left scale-110 left-[-15rem]"
          />
        </motion.div>

      </div>
      <div className="relative flex-row w-full justify-center align-right mx-auto px-80">
        <motion.div className="relative flex w-full inset-0 max-w-xs justify-center top-[5rem]">
            <Image
              src="/contact/phone 1.png"
              alt="Mahnoor's Portfolio"
              width={800}
              height={400}
              className="object-contain w-10/10 w-full z-2 animate-flicker"
            />
            <Image
              src="/contact/phone 2.png"
              alt="Mahnoor's Portfolio"
              width={800}
              height={400}
              className="object-contain w-10/10 w-full z-2 animate-flicker2 absolute"
            />
        </motion.div>
          <motion.div className=" flex justify-right align-right items-start  scale-150 ">
            <Image
              src="/contact/wombat.png"
              alt="About Image"
              width={500}
              height={700}
              className="relative object-contain  z-4 right-[-40rem] top-[-20rem]"
            />
          </motion.div>

        <motion.div className=" flex justify-right align-right items-start  scale-150 ">
            <Image
              src="/contact/text 1.png"
              alt="About Image"
              width={500}
              height={700}
              className="relative object-contain  z-4 right-[-30rem] top-[-22rem]"
            />
          </motion.div>
        <motion.div className=" flex justify-right align-right items-start  scale-150 ">
            <Image
              src="/contact/text 2.png"
              alt="About Image"
              width={500}
              height={700}
              className="relative object-contain  w-full max-w-xs z-4 right-[-40rem] top-[-20rem]"
            />
          </motion.div>


      </div>



 {/* {hello} */}


    </div>





  </div>
  
  
  
  
  
  );
}