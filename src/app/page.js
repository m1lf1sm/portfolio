"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/backgroun.jpg')] bg-cover bg-center relative overflow-hidden top-[-4rem]" >
      {/* Title */}
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
      <div className="items-center justify-center relative w-full max-w-xl aspect-square top-[-8rem] r">
        {/* Center Avatar */}
        <div className="absolute inset-0 w-full  flex items-center justify-center ">
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
          transition={{ duration: 0, type: "tween", ease:"linear" }}
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
          transition={{ duration: 0, type: "tween", ease:"linear" }}
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
          transition={{ duration: 0, type: "tween", ease:"linear" }}
          className="absolute bottom-25 left-9/20 -translate-x-1/2 z-10 w-(2.5)/3 max-w-3xl top-[32rem] rotate-[-10deg]"
        >
          <Image
            src="/home/contact1.png"
            alt="Contact"
            width={200}
            height={180}
            className="object-contain w-full max-w-3xl  "
          />
        </motion.div>
      </div>
      <div className="absolute bottom-0 mb-10 flex flex-col items-center justify-center space-y-2">
        <Image
          src="/home/whoami.png"
          alt="whoami"
          width={100}
          height={50}
          className="object-contain w-2/10 max-w absolute "
        />
        <Image
          src="/about/abouttext1.png"
          alt="whoami"
          width={100}
          height={50}
        />
        <Image
          src="/about/abouttext2.png"
          alt="whoami"
          width={100}
          height={50}
        />
        <Image
          src="/about/abouttext3.png"
          alt="whoami"
          width={100}
          height={50}
        />
        <Image
          src="/about/abouttext4.png"
          alt="whoami"
          width={100}
          height={50}
        />
        <Image
          src="/about/abouttext5.png"
          alt="whoami"
          width={100}
          height={50}
        />
        <Image
          src="/about/About_Image.png"
          alt="whoami"
          width={100}
          height={50}
        />
        </div>





    </div>
  );
}