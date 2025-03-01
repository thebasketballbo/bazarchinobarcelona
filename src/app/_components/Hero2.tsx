import React from 'react'
import "@/app/custom.css";

const Hero2: React.FC = () => {
    return (
        <div className='w-full bg-[#072215]'>
            <div className=' max-w-screen-2xl mx-auto text-white hero-div'>
                <div className='px-10 py-44 gap-2 flex flex-col'>
                    <p className=''>bazarchinobarcelona</p>
                    <p className='glow-text'>Ferreteria y bazar hogar</p>
                    <p className='py-1'>bazarchinobarcelona es la mejor opción en artículos de ferretería</p>
                    <div>
                        <a href='/productos' type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Explorar productos</a>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    {/* <img src="/iqo.png" className='md:hidden' alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero2
