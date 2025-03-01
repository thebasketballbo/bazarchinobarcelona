"use client";
import React, { useRef } from "react";
import "@/app/custom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const Comm4: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full max-w-screen-2xl px-6 sm:px-4 md:px-8 lg:px-16 mx-auto mt-10 bg-gray-50">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6 px-4 py-6">
        <h2 className="text-center text-xl sm:text-lg md:text-2xl lg:text-3xl font-semibold">
          Clientes Felices de Ferreteria y bazar hogar
        </h2>
        <div className="flex gap-3 sm:gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 bg-white rounded-full hover:bg-gray-300 transition"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 bg-white rounded-full hover:bg-gray-300 transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Default to 1 slide
        navigation={false}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },  // 1 slide on small screens
          768: { slidesPerView: 2 },  // 2 slides on medium screens
          1024: { slidesPerView: 3 }, // 3 slides on large screens
          1280: { slidesPerView: 4 }, // 4 slides on extra-large screens
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-teal-400 p-6 rounded-lg flex flex-col text-white font-bold h-72 w-full mx-auto">
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

              {/* Text (Above the Image) */}
              <div className="relative z-10 px-4 flex flex-col gap-4">
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-2xl" />
                    ))}
                  </div>
                </div>
                <p className="text-xl">¡Super!</p>
                <p className="text-sm">
                  Gran variedad de productos a precios accesibles. Siempre
                  encuentro lo que necesito.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comm4;
