import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Macbook from "@/components/MacBook";
import RecentProjects from "@/components/ReacentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto m:px-10 px-5">
      <div className="max-w-7xl w-full"></div>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Macbook />
      <Grid />
      <RecentProjects />
      {/* <Clients /> */}
      <Experience />
      <Footer />
    </main>
  );
}
