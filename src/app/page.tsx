import Image from "next/image";
import Head from 'next/head'; // Import the Head component
import { AppHero } from "./_components/hero";
import { CategoriesSection } from "./_components/categories";
import { AboutUs } from "./_components/aboutUs";
import { Location } from "./_components/location";
import Hero2 from "./_components/Hero2";
import Comm1 from "./_components/Comm1"
import Comm2 from "./_components/Comm2";
import Comm3 from "./_components/Comm3";
import Comm4 from "./_components/Comm4";
import Comm5 from "./_components/Comm5";
import Comm6 from "./_components/Comm6";
import Comm7 from "./_components/Comm7";
import Comm8 from "./_components/Comm8";
import Comm9 from "./_components/Comm9";
import Comm10 from "./_components/Comm10";
export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center ">
        {/* <AppHero /> */}
        <Hero2 />
        <Comm1 />
        <Comm2 />
        <Comm3 />
        <Comm4 />
        <Comm5 />
        <Comm6 />
        <Comm7 />
        <Comm8 />
        <Comm9 />
        <Comm10 />

        {/* <CategoriesSection />
        <AboutUs />
        <Location /> */}
      </main>
    </>
  );
}
