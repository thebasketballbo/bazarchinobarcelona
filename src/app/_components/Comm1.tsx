"use client";
import React, { useRef } from "react";
import "@/app/custom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Comm1: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 mt-10">
            {/* Navigation Buttons & Title */}
            <div className="flex justify-between items-center mb-4 px-4">
                <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                    Porque te mereces lo mejor...
                </h2>
                <div className="hidden sm:flex gap-3">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="p-2 bg-white rounded-full hover:bg-gray-400 transition shadow-md"
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-2 bg-white rounded-full hover:bg-gray-400 transition shadow-md"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Swiper Carousel */}
            <div className="relative">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    navigation={false}
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {[
                        { img: "/iphone.jpg", text: "Todos los iPhone y teléfonos móviles están disponibles." },
                        { img: "/macbook.jpg", text: "Los últimos MacBooks están disponibles." },
                        { img: "/airpods.jpg", text: "Hay una variedad de AirPods disponibles." },
                        { img: "/headphone.jpg", text: "Hay una variedad de auriculares con la mejor calidad disponibles." },
                        { img: "/camera.jpg", text: "La cámara está disponible." },
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative p-4 rounded-lg flex items-center justify-center text-white font-bold h-64 sm:h-72 w-full mx-auto"
                                style={{
                                    backgroundImage: `url("${item.img}")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                                <p className="relative z-10 text-center px-4">{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Mobile Navigation Buttons */}
                <div className="sm:hidden absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="p-2 bg-white rounded-full hover:bg-gray-400 transition shadow-md"
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-2 bg-white rounded-full hover:bg-gray-400 transition shadow-md"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comm1;
