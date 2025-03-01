"use client"
import React from 'react'
import "@/app/custom.css";
import { WiStars } from "react-icons/wi";
import { FaCartArrowDown } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";



const Comm3: React.FC = () => {


    return (
        <div>
            <div>
                <div className='flex flex-col items-center justify-center py-5'>
                    <p className='text-3xl text-gray-800 font-semibold text-center'>Productos más vendidos</p>
                    <div className='mt-4 bg-teal-400 p-1 px-3 rounded-xl text-white font-medium'>
                        <p>Ferreteria y bazar hogar ofrece las mejores ofertas   </p>
                    </div>
                </div>
                <div>

                    <div className="comm30-div">
                        {/* First Card */}
                        <div className="relative bg-white py-8 px-12 rounded-2xl shadow-lg border border-gray-200">
                            <img
                                src="/shoes.jpg" // Replace with actual image
                                alt="IQOS ILUMA ONE"
                                className="w-full h-36 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold">Zapatos De Niños</h3>
                            <p className="text-gray-600">Ferreteria y bazar hogar.</p>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded-full w-full">
                                Comprar
                            </button>
                        </div>

                        {/* Second Card (Popular) */}
                        <div className="relative bg-white py-8 px-16 rounded-2xl shadow-lg border border-teal-400">
                            <div className="absolute top-2 left-2 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                                Popular
                            </div>
                            <img
                                src="/makeup.jpg" // Replace with actual image
                                alt="IQOS ILUMA"
                                className="w-full h-36 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold">Maquillaje Femenino</h3>
                            <p className="text-gray-600">Ferreteria y bazar hogar.</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-gray-500 line-through mr-2">59 €</span>
                                <span className="text-teal-500 font-bold text-lg">49 €</span>
                            </div>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded-full w-full">
                                Comprar
                            </button>
                        </div>

                        {/* Third Card */}
                        <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                            <img
                                src="/mirror.jpg" // Replace with actual image
                                alt="IQOS ILUMA PRIME"
                                className="w-full h-36 object-contain mb-4"
                            />
                            <h3 className="text-lg font-semibold">Espejo</h3>
                            <p className="text-gray-600">Ferreteria y bazar hogar.</p>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded-full w-full">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
                <div className='comm3-div'>
                    <div className='flex items-center gap-3 border-2 border-gray-400 p-4'>
                        <WiStars className='text-3xl text-teal-400 font-medium' />
                        <p> ¿Por qué elegir Ferreteria y bazar hogar?</p>
                    </div>
                    <div className='flex items-center gap-3 border-2 border-gray-400 p-4'>
                        <FaCartArrowDown className='text-3xl text-teal-400 font-medium' />
                        <p>Tienda Ferreteria y bazar hogar</p>
                    </div>
                    <div className='flex items-center gap-3 border-2 border-gray-400 p-4'>
                        <BiSolidOffer className='text-3xl text-teal-400 font-medium' />
                        <p>Ofertas</p>
                    </div>
                    <div className='flex items-center gap-3 border-2 border-gray-400 p-4'>
                        <MdLocationOn className='text-3xl text-teal-400 font-medium' />
                        <p>Puntos de venta Ferreteria y bazar hogar</p>
                    </div>
                    <div className='flex items-center gap-3 border-2 border-gray-400 p-4'>
                        <FaQuoteRight className='text-3xl text-teal-400 font-medium' />
                        <p>FAQs</p>
                    </div>
                    <div className='flex items-center gap-3 border-2 border-gray-400 p-4'>
                        <FaBookBookmark className='text-3xl text-teal-400 font-medium' />
                        <p>¿Aún no lo tienes claro?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comm3
