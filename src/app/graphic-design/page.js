"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IllustrationsPage() {
    const grid6 = [1, 2, 3, 4, 5, 6];
    const grid3 = [8, 9, 10];
    const grid8 = [11,12,13,14,15,16,17,18]
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imagePath) => {
        setSelectedImage(imagePath);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        
        <div className="bg-[url('/backgroun.jpg')] bg-cover bg-center min-h-screen overflow-hidden">
            <header className="relative w-full z-40">
                <Link href="/#work" passHref legacyBehavior>
                    <a className="absolute top-4 left-4 sm:top-6 sm:right-6 md:top-8 md:right-8 cursor-pointer">
                        <Image
                            src="/illustration/back 1.png" // CHANGE THIS TO YOUR ACTUAL IMAGE PATH
                            alt="Back to Home"
                            width={150} // Base size
                            height={150}
                            // Responsive sizing classes
                            className="w-20 h-auto sm:w-24 md:w-32 lg:w-36 transition-transform duration-200 hover:rotate-[-15deg]"
                        />
                    </a>
                </Link>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
                {/* 3x2 responsive grid */}
                <section aria-label="3 by 2 image grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {grid6.map((i) => (
                        <div key={i} className="w-full overflow-hidden rounded-lg shadow-md">
                            <button
                                onClick={() => openModal(`/graphic-design/${i}.png`)}
                                aria-label={`Open illustration ${i} at full size`}
                                className="block w-full h-full cursor-pointer"
                            >
                                <Image
                                    src={`/graphic-design/${i}.png`}
                                    alt={`gd ${i}`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-48 sm:h-56 md:h-128 object-contain"
                                    priority={false}
                                />
                            </button>
                        </div>
                    ))}
                </section>

                {/* Single centered image */}
                <section className=" flex justify-center">
                    <div className="w-full mt-4 overflow-hidden rounded-xl shadow-lg">
                        <button
                            onClick={() => openModal("/graphic-design/7.png")}
                            className="w-full cursor-pointer"
                            aria-label="Open featured illustration at full size"
                        >
                            <Image
                                src="/graphic-design/7.png"
                                alt="Featured illustration"
                                width={2423}
                                height={1560}
                                className="w-full h-full object-contain"
                            />
                        </button>
                    </div>
                </section>

                {/* 1x3 responsive grid */}
                <section aria-label="1 by 3 image grid" className=" grid grid-cols-1 sm:grid-cols-3 gap-x-2 ">
                    {grid3.map((i) => (
                        <div key={i} className="w-full overflow-hidden rounded-lg shadow-md -mt-20">
                            <button
                                onClick={() => openModal(`/graphic-design/${i}.png`)}
                                className="w-full cursor-pointer"
                                aria-label={`Open illustration ${i} at full size`}
                            >
                                <Image
                                    src={`/graphic-design/${i}.png`}
                                    alt={`Grid illustration ${i}`}
                                    width={1200}
                                    height={900}
                                    className="w-full h-56 sm:h-128 md:h-256 object-contain"
                                />
                            </button>
                        </div>
                    ))}
                </section>
                <section aria-label="2 by 8 image grid" className=" grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-40">
                    {grid8.map((i) => (
                        <div key={i} className="w-full overflow-hidden rounded-lg shadow-md -mt-50 -mb-50">
                            <button
                                onClick={() => openModal(`/graphic-design/${i}.png`)}
                                className="w-full cursor-pointer"
                                aria-label={`Open illustration ${i} at full size`}
                            >
                                <Image
                                    src={`/graphic-design/${i}.png`}
                                    alt={`Grid illustration ${i}`}
                                    width={1200}
                                    height={900}
                                    className="w-full h-56 sm:h-128 md:h-256 object-contain"
                                />
                            </button>
                        </div>
                    ))}
                </section>

                {/* Back button (custom shaped image) */}
               
            </main>

            {/* Modal for full-size image */}
{/* Modal for full-size image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-white/20 backdrop-blur-lg z-50 flex items-center justify-center p-4"                    
                    onClick={closeModal}
                >
                    {/* CUSTOM IMAGE CLOSE BUTTON */}
                    <button
                        // Prevents the background (outer div) onClick from firing when button is clicked
                        onClick={(e) => { e.stopPropagation(); closeModal(); }} 
                        aria-label="Close modal"
                        // Positioning and sizing classes
                        className="absolute top-4 left-10 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 p-2 cursor-pointer transition-transform duration-200 max-w-2xl"
                    >
                        <Image
                            src="/cross.png" // ⬅️ CHANGE THIS PATH TO YOUR CUSTOM IMAGE
                            alt="Close"
                            width={500}
                            height={500}
                            // Responsive sizing for the image
                            className="w-full h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-containhover:rotate-10deg" 
                        />
                    </button>
                    {/* --------------------------- */}
                    
                    <div className="relative max-w-full max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Full size illustration"
                            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}