import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
//import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
//import Clients from "@/components/Clients"(<Clients />)tambah yang didalam kurung ini dibawah RecentProjects
import Footer from "@/components/Footer";
import Experience from "@/components/Skills";
import Test from "@/components/Test";
import Positions from "@/components/Positions";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Test />
        <Positions />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
