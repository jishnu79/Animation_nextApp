import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProject from '../Components/RecentProject'
import './globals.css'
import { navItems } from "@/Data/Index";
import Clients from "@/Components/Clients";
import Experence from "@/Components/Experence";
import TextRotet from "@/Components/ui/TextRotet";
import ScrollAnim from "@/Components/ui/ScrollAnim";
import ScrollAnim2 from "@/Components/ui/ScrolAnim2";
import ScrollAnim3 from "@/Components/ui/ScrollAnim3";
import ScrollAnim4 from "@/Components/ui/ScrollAnim4";

export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        {/* <Hero />
        <Grid /> 
        <RecentProject/>
        <Clients/>
        <Experence/> */}
        <TextRotet/>
        <ScrollAnim/> 
        <ScrollAnim2/>
        <ScrollAnim3/>
        <ScrollAnim4/>
      </div>
    </main> 
  );
}
