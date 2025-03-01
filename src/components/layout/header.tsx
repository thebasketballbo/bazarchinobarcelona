"use client"
import { appConfig } from "@/config"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useAnimation } from "framer-motion"
import { useState } from "react"



export const Header = () => {
    const [classs, setclasss] = useState("hidden")
    const path = usePathname()

    const operation = () => {
        if (classs == "hidden") {
            setclasss("")
        } else {
            setclasss("hidden")
        }
    }
    return <div className="w-full  " >
        {/* <div className="flex py-2 lg:hidden items-center px-2 justify-between" ><i className="bi text-4xl font-bold bi-list"></i>
            <div className="flex gap-2 px-4 border-2 w-[240px] h-[40px] p-1 border-primaryDark rounded-xl " >
                <input className="w-full flex focus:border-0 focus:outline-none " placeholder="Search..." />
                <i className="bi bi-search  font-bold"></i>
            </div>
        </div>
        <div className="w-full relative lg:hidden max-w-full " >    <motion.div initial={{ x: -500 }} className="flex bg-white px-2 py-6 w-[100vw] absolute z-50 gap-4 flex-col " >
            <div className="w-full flex items-center justify-end" ><i className="bi text-2xl font-bold  text-red-400 bi-x-lg"></i></div>
            <Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.news) })} href={appConfig.routes.news} >News</Link>
            <Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path == "/" })} href={appConfig.routes.home} >home</Link>
            <Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.productos) })} href={appConfig.routes.productos} >rebajas</Link>
            <Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.recomendaciones) })} href={appConfig.routes.recomendaciones} >recomendaciones</Link>
            <Link className={cn("H4 text-start  capitalize w-fit  hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.ProductosPersonalizados) })} href={appConfig.routes.ProductosPersonalizados} >Productos Personalizados</Link>
        </motion.div></div>
        <div className="w-full hidden lg:flex flex-col " >
            <div className="w-full hidden lg:flex justify-end pt-4 px-12" >
                <div className="flex gap-2 px-4 border-2 w-[300px] h-[40px] p-1 border-primaryDark rounded-xl " >
                    <input className="w-full flex focus:border-0 focus:outline-none " placeholder="Search..." />
                    <i className="bi bi-search text-2xl font-bold"></i>
                </div></div>
            <div className="flex  items-center justify-between " >
                <div className=" hidden lg:flex items-center px-4  " >
                    <img src={appConfig.logo} />
                    <h1 className="H3 inline-block max-w-[300px]" >{appConfig.appName}</h1>
                </div>
                <div className="flex px-2 lg:px-12 gap-3 " >
                    <Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.news) })} href={appConfig.routes.news} >news</Link>

                    <Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path == "/" })} href={appConfig.routes.home} >home</Link>
                    <Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.productos) })} href={appConfig.routes.productos} >rebajas</Link>
                    <Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.recomendaciones) })} href={appConfig.routes.recomendaciones} >recomendaciones</Link>
                    <Link className={cn("H4 capitalize px-4 hover:border-b-4 hover:border-b-primaryDark hover:text-primaryDark hover:opacity-80 pb-2", { "border-b-4 border-b-primaryDark text-primary pb-2": path.includes(appConfig.routes.ProductosPersonalizados) })} href={appConfig.routes.ProductosPersonalizados} >Productos Personalizados</Link>

                </div>
            </div>
        </div> */}


        {/* <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">FERRETERÍA BAZAR HOGAR</span>
                </a>
               
                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">



                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <a href="/news" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">News</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-[#45B98A] rounded-sm md:bg-transparent md:text-[#45B98A] md:p-0   " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/productos" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">Rebajas</a>
                            </li>
                            <li>
                                <a href="/recomendaciones" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">Recomendaciones</a>
                            </li>
                            <li>
                                <a href="/ProductosPersonalizados" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">Productos Personalizados</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> */}





        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <button onClick={operation} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${classs} w-full md:block md:w-auto" id="navbar-default`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/news" className="text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">News</a>
                        </li>
                        <li>
                            <a href="/" className="text-xl block py-2 px-3 text-white bg-[#45B98A] rounded-sm md:bg-transparent md:text-[#45B98A] md:p-0   " aria-current="page">Home</a>
                        </li>

                        <li>
                            <a href="/productos" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">Rebajas</a>
                        </li>
                        <li>
                            <a href="/recomendaciones" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">Recomendaciones</a>
                        </li>

                        <li>
                            <a href="/ProductosPersonalizados" className=" text-xl block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45B98A] ">Productos Personalizados</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </div>
}


