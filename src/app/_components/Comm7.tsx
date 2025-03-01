"use client";
import React, { useRef } from "react";
import "@/app/custom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Comm7: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-24 mx-auto mt-10 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="relative z-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 font-semibold">
        Imágenes de Ferreteria y bazar hogar store
        </h2>
        <div className="flex gap-3 sm:gap-5 mt-4 sm:mt-0">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 sm:p-3 bg-white rounded-full hover:bg-gray-400 transition"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 sm:p-3 bg-white rounded-full hover:bg-gray-400 transition"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={15}
        slidesPerView={1} // Default 1 slide on smallest screens
        navigation={false}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },  // 1 slide on small screens
          768: { slidesPerView: 2 },  // 2 slides on medium screens
          1024: { slidesPerView: 3 }, // 3 slides on large screens
        }}
      >
        {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"].map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative p-4 rounded-lg flex items-center justify-center text-white font-bold h-64 sm:h-72 md:h-80 w-full sm:w-96 mx-auto"
              style={{
                backgroundImage: `url("/${img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comm7;
