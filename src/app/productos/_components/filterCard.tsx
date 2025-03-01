"use client"
import { appConfig } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const productCategoriesEnglish = {
  "artilugios": "artilugios",
  "Accesorios para bicicletas": "Accesorios para bicicletas",
  "Camas":"Camas",
  "Electrodomésticos": "Electrodomésticos",
  "Beach Umbrellas": "Beach Umbrellas",
  "clothes": "clothes",
  "Cocina": "Cocina",
  "Belleza": "Belleza",
  "Papeleria": "Papeleria",
  "baño": "baño",
  "decoración": "decoración",
  "Cajas de herramientas": "Cajas de herramientas",
  "PARAFARMACIA": "PARAFARMACIA",
  "Juguetes": "Juguetes",
  "PRODUCTOS DE HOGAR": "PRODUCTOS DE HOGAR",
  "Cafeteras y Capsulas": "Cafeteras y Capsulas",
  "Beach Chairs": "Beach Chairs",
  "MENAJE": "MENAJE",
  "botellas": "botellas",
  "Las fans": "Las fans",
  "mochilas escolares":"mochilas escolares",
  "PRODUCTOS GOURMET": "PRODUCTOS GOURMET",
  "BEBIDAS PREMIUM": "BEBIDAS PREMIUM",
  "REGALOS DEPORTIVOS": "REGALOS DEPORTIVOS",
  "libros": "Libros",
  "mirar": "mirar",
  "batería": "batería",
  "sábanas": "sábanas",
  "FERRETERIA HOGAR": "FERRETERIA HOGAR",
  "Accesorios para hombres": "Accesorios para hombres",
  "electrónica": "electrónica",
  "sillas": "sillas",
  "Muebles": "Muebles",
  "ARTICULOS PARA CAMPING": "ARTICULOS PARA CAMPING",
  "Floats": "Floats",
  "Water Toys": "Water Toys",
  "Picnic Essentials": "Picnic Essentials",
  "Sun Protection": "Sun Protection",
  "Portable Grills": "Portable Grills",
  "Combs": "Combs",
  "Charger Cables": "Charger Cables",
  "Men's Caps": "Men's Caps",
  "Socks": "Socks",
  "Kitchen Utensils": "Kitchen Utensils",
};

const productCategories = {
  artilugios: "artilugios",
  Accesorios_para_bicicletas: "Accesorios para bicicletas",
  Camas:"Camas",
  Electrodomésticos: "Electrodomésticos",
  sombrillas: "Sombrillas",
  ropa: "Ropa",
  lamp: "Lamp",
  Cocina: "Cocina",
  Belleza: "Belleza",
  Papeleria: "Papeleria",
  baño: "baño",
  decoración: "decoración",
  Cajas_de_herramientas: "Cajas de herramientas",
  PRODUCTOS_DE_HOGAR: "PRODUCTOS DE HOGAR",
  ARTICULOS_PARA_CAMPING: "ARTICULOS PARA CAMPING",
  Cafeteras_y_Capsulas: "Cafeteras y Capsulas",
  PARAFARMACIA: "PARAFARMACIA",
  Juguetes: "Juguetes",
  MENAJE: "MENAJE",
  botellas: "botellas",
  Las_fans: "Las fans",
  mochilas_escolares:"mochilas escolares",
  PRODUCTOS_GOURMET: "PRODUCTOS GOURMET",
  BEBIDAS_PREMIUM: "BEBIDAS PREMIUM",
  REGALOS_DEPORTIVOS: "REGALOS DEPORTIVOS",
  Libros: "Libros",
  Mirar: "Mirar",
  batería: "batería",
  sábanas: "sábanas",
  FERRETERIA_HOGAR: "FERRETERIA HOGAR",
  Accesorios_para_hombres: "Accesorios para hombres",
  electrónica: "electrónica",
  sillas: "sillas",
  Muebles: "Muebles",
  sillasDePlaya: "Sillas de Playa",
  flotadores: "Flotadores",
  juguetesAcuaticos: "Juguetes Acuáticos",
  esencialesDePicnic: "Esenciales de Picnic",
  proteccionSolar: "Protección Solar",
  parrillasPortatiles: "Parrillas Portátiles",
  peines: "Peines",
  cablesDeCargador: "Cables de Cargador",
  gorrasParaHombres: "Gorras para Hombres",
  calcetines: "Calcetines",
  utensiliosDeCocina: "Utensilios de Cocina",
} as const


const productsCategoriesArray = Object.values(productCategories)
export type ProductCategory = typeof productsCategoriesArray[number]

export const ProductsFilterCard: React.FC<{ category?: string }> = ({ category }) => {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get(appConfig.products.productQueryName)
  return <div className="flex lg:w-[420px] itesm-center  bg-secondary text-primary gap-4  justify-start rounded-md h-fit flex-col px-4 lg:px-8 py-6 " >
    <h3 className="H4 text-black"  >Filters</h3>
    <div className="gap-4 w-full  flex flex-col"  >
      {
        productsCategoriesArray.map(filter => {
          const searchParams = new URLSearchParams()
          searchParams.set(appConfig.products.productQueryName, filter)
          // console.log("href" , `${appConfig.links.blog}?${appConfig.blog.blogCategoryQueryName}=${filter}`)
          return <Link key={filter} href={`/productos?${searchParams.toString()}`} scroll={false}  > <button style={{ width: "100%" }} className={cn("w-full text-2xl ", { "textBtn": filter !== selectedCategory }, { "primaryBtn": filter == selectedCategory })} >{filter}  </button></Link>
        })
      }
    </div>
  </div>
}