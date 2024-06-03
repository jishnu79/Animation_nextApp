import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProject from '../Components/RecentProject'
import './globals.css'
import { navItems } from "@/Data/Index";

export default function Home() {
  return (
    <main className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid /> 
        <RecentProject/>
      </div>
    </main> 
  );
}
