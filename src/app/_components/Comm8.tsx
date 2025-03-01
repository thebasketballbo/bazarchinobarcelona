"use client"
import React from 'react'
import "@/app/custom.css";
import "swiper/css";
import "swiper/css/navigation";
const Comm8: React.FC = () => {

    return (
        <div className='bg-gray-50 w-full h-full'>
            <div className='max-w-screen-2xl mx-auto '>
                <div className='comm8-div'>
                    <div className='flex flex-col p-12 px-  24'>
                        <p className='text-4xl font-medium mb-10'>🆕 Novedades en Ferreteria y bazar hogar 🆕</p>
                        <div>
                            <button className="px-6 py-2 border-2 border-black rounded-full text-black font-medium hover:bg-gray-100 transition">
                                Descubre más
                            </button>
                        </div>
                    </div>
                    <div className='comm8-2'>
                        <div className='bg-white p-5 flex flex-col gap-1'>
                            <p>🌟 Nueva Colección de Moda</p>
                            <p>Descubre nuestra última colección de ropa con diseños exclusivos y materiales de alta calidad. ¡Vístete con estilo y comodidad!</p>                        </div>
                        <div className='bg-white p-5 flex flex-col gap-1'>
                            <p>🏠 Innovación para tu Hogar</p>
                            <p>Nuevos productos para facilitar tu día a día en casa. Desde organizadores hasta electrodomésticos, todo lo que necesitas en un solo lugar.</p>
                        </div>
                        <div className='bg-white p-5 flex flex-col gap-1'>
                            <p>🛠️ Herramientas y Ferretería</p>
                            <p>Encuentra las mejores herramientas y accesorios de ferretería para tus proyectos de bricolaje y reparaciones. Calidad garantizada.</p>
                        </div>
                        <div className='bg-white p-5 flex flex-col gap-1'>
                            <p>🎁 Promociones Especiales</p>
                            <p>No te pierdas nuestras ofertas exclusivas y descuentos en productos seleccionados. ¡Aprovecha antes de que se agoten!</p>                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comm8
