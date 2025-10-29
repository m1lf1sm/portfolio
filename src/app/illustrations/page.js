"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IllustrationsPage() {
    const grid6 = [1, 2, 3, 4, 5, 6];
    const grid4 = [8, 9, 10, 11];
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imagePath) => {
        setSelectedImage(imagePath);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-[url('/backgroun.jpg')] bg-cover bg-center min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
                {/* 3x2 responsive grid */}
                <section aria-label="3 by 2 image grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {grid6.map((i) => (
                        <div key={i} className="w-full overflow-hidden rounded-lg shadow-md">
                            <button
                                onClick={() => openModal(`/illustration/${i}.png`)}
                                aria-label={`Open illustration ${i} at full size`}
                                className="block w-full h-full cursor-pointer"
                            >
                                <Image
                                    src={`/illustration/${i}.png`}
                                    alt={`Illustration ${i}`}
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
                            onClick={() => openModal("/illustration/7.png")}
                            className="w-full cursor-pointer"
                            aria-label="Open featured illustration at full size"
                        >
                            <Image
                                src="/illustration/7.png"
                                alt="Featured illustration"
                                width={2423}
                                height={1560}
                                className="w-full h-full object-contain"
                            />
                        </button>
                    </div>
                </section>

                {/* 2x2 responsive grid */}
                <section aria-label="2 by 2 image grid" className=" grid grid-cols-1 sm:grid-cols-2 gap-x-2 ">
                    {grid4.map((i) => (
                        <div key={i} className="w-full overflow-hidden rounded-lg shadow-md -mt-20">
                            <button
                                onClick={() => openModal(`/illustration/${i}.png`)}
                                className="w-full cursor-pointer"
                                aria-label={`Open illustration ${i} at full size`}
                            >
                                <Image
                                    src={`/illustration/${i}.png`}
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
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-white/20 backdrop-blur-lg z-50 flex items-center justify-center p-4"                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
                        onClick={closeModal}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                    <div className="relative max-w-full max-h-full overflow-auto">
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