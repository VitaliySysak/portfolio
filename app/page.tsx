"use client";

import { navItems } from "@/data";
import { Grid } from "@/src/components/shared/grid";
import { Hero } from "@/src/components/shared/hero";
import { RecentProjects } from "@/src/components/shared/recent-projects";
import { FloatingNav } from "@/src/components/shared/floating-nav";
import { Clients } from "@/src/components/shared/clients";
import { Experience } from "@/src/components/shared/experience";
import { Approach } from "@/src/components/shared/approach";
import { Contact } from "@/src/components/shared/contact/contact";

export default function Home() {
  const time = new Date();
  return (
    <main className="relative bg-primary flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Contact />
        <h3 className="text-white text-center mb-10">copyright © {time.getFullYear()}</h3>
      </div>
    </main>
  );
}
