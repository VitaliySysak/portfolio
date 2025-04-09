"use client";

import { navItems } from "@/data";
import { Grid } from "@/src/components/shared/grid";
import { Hero } from "@/src/components/shared/hero";
import { RecentProjects } from "@/src/components/shared/recent-projects";
import { FloatingNav } from "@/src/components/shared/floating-nav";
import { FaHome } from "react-icons/fa";
import { Clients } from "@/src/components/shared/clients";

export default function Home() {
  return (
    <main className="relative bg-primary flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  );
}
