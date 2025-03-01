import { Title } from "@/ui/title"
import { ProductsHero } from "./_components/hero"
import { DisplayAnimation } from "@/animations/displayAnimation"
import { ProductCategory, ProductsFilterCard } from "./_components/filterCard"
import { ProductsSection } from "./_components/products"
import { Suspense } from "react"
import { Metadata } from "next"
import data from "./product.json"


export interface Product {
  name: string,
  description: string,
  image: string,
  category: ProductCategory
}

export const metadata: Metadata = {
  title: "Productos de Ferretería y Hogar | Bazar Chino",
  description: "Explora la amplia selección de productos de Ferretería y Bazar Hogar Bazar Chino. Encuentra herramientas, artículos para el hogar y mucho más, todo con la mejor calidad y precios competitivos"
}

const products: Product[] = data as Product[];


export default async function BLogPage() {


  // if(category)allPosts =    allPosts.filter(post=>post.category === category)
  return <Suspense>  <div className="flex flex-col py-10 px-2 max-w-full gap-6 items-center "  >
    <Title titleClassName="text-primaryDark" title="Nuestros Productos" descreption="Explora nuestra diversa selección de artículos de alta calidad para tu hogar." />
    <div className="flex px-10 py-5 flex-col gap-6" >
      <ProductsHero />
      <DisplayAnimation className="w-full " delay={0} >
        <div className="flex flex-col lg:flex-row w-full  justify-between  gap-4 " >
          <ProductsFilterCard category={undefined} />
          <ProductsSection products={products} />
        </div>
      </DisplayAnimation>
    </div>
  </div></Suspense>
}