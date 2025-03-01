"use client"
import React from 'react'
import "@/app/custom.css";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const Comm2: React.FC = () => {

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
            <div className='comm-2-div max-w-screen-2xl mx-auto bg-gray-50'>
                <div className='px-2 mt-5 max-w-screen-2xl mx-auto'>
                    <p className='text-gray-800 text-3xl font-semibold'>¿Por qué elegir Ferreteria y bazar hogar?</p>
                    <p className='mt-3 text-gray-800 text-md font-medium'>En Ferreteria y bazar hogar, nos destacamos por ofrecer productos de alta calidad a precios accesibles. Contamos con una amplia variedad de artículos para el hogar, ferretería y bazar, asegurando siempre la mejor relación calidad-precio. Nuestro compromiso con la satisfacción del cliente se refleja en un servicio personalizado, entregas rápidas y una experiencia de compra confiable. ¡Descubre la diferencia con nosotros!</p>
                    <div className='border border-black mt-4 p-4'>
                        <p>Descubre la diferencia con nosotros y encuentra todo lo que necesitas con la mejor calidad y precios accesibles. ¡Tu tienda de confianza en Barcelona!</p>
                    </div>
                </div>
                <div>
                    <div className="relative w-full h-[400px] flex justify-center items-center" id="image-section">
                        <div className="relative w-[80%] h-full overflow-hidden rounded-lg">
                            <img
                                src="/man.jpg"
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

export default Comm2
