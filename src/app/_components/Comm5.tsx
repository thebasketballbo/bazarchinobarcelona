"use client"
import React from 'react'
import "@/app/custom.css";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const Comm5: React.FC = () => {

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
        <div >
            <div className='comm-2-div '>
                <div className='px-12 sm:px-36 mt-5'>
                    <p className='text-gray-800 text-4xl font-semibold'>¿Descubre la calidad y estilo en Ferreteria y bazar hogar?   </p>
                    <div className='my-12'>
                        <p className='mt-3 text-gray-800 text-md font-medium'>✔️ Encuentra ropa de alta calidad con diseños exclusivos y precios irresistibles.</p>
                        <p className='mt-3 text-gray-800 text-md font-medium'>✔️ Renueva tu armario con nuestra selección de moda para todas las estaciones.</p>
                        <p className='mt-3 text-gray-800 text-md font-medium'>✔️ Compra con confianza: telas premium, comodidad y estilo en cada prenda.</p>
                    </div>
                    <div>
                        <button className="px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-gray-100 transition">
                            Descubre 
                        </button>
                    </div>
                </div>
                <div>
                    <div className="relative w-full h-[400px] flex justify-center items-center" id="image-section">
                        <div className="relative w-[80%] sm:w-[100%] h-full overflow-hidden rounded-lg">
                            <img
                                src="/girl.jpg"
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

export default Comm5
