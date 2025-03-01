"use client"
import React from 'react'
import "@/app/custom.css";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const Comm6: React.FC = () => {

    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("image-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    setVisible(true);
                }
            }
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='w-full bg-gray-50'>
            <div className='comm-2-div max-w-screen-2xl mx-auto'>
                <div className='px-12 sm:px-36 mt-5'>
                    <p className='text-gray-800 text-4xl font-semibold'>¿Y tú, buscas calidad y estilo único?</p>
                   <div className='my-7'>
                        <p className='mt-3 text-gray-800 text-md font-medium'>¿Y tú, buscas calidad y estilo único?</p>
                        <p className='mt-3 text-gray-800 text-md font-medium'>Si te gusta la exclusividad, buscas productos de alta calidad y te niegas a conformarte con lo común, Ferreteria y bazar hogar es para ti. Aquí reinventamos la experiencia de compra con artículos únicos para el hogar, ferretería y bazar.</p>
                        <p className='mt-3 text-gray-800 text-md font-medium'>¡Explora nuestro catálogo y encuentra lo que realmente necesitas! ✨🛍️</p>
                   </div>
                    
                    <div>
                        <button className="px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-gray-100 transition">
                        Descubre más
                        </button>
                    </div>
                </div>
                <div>
                    <div className="relative w-full h-[400px] flex justify-center items-center" id="image-section">
                        <div className="relative w-[80%] h-full overflow-hidden rounded-lg">
                            <img
                                src="/boy.jpg"
                                alt="Dynamic Background"
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={`absolute top-0 left-0 w-full h-full bg-cyan-500 transition-all duration-1000 ease-out ${visible ? "translate-x-full translate-y-full" : ""}`}
                                style={{
                                    clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                                    transition: "transform 1s ease-out",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comm6
