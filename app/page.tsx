"use client";

import { Grid } from "@/src/components/shared/grid";
import { Hero } from "@/src/components/shared/hero";
import { FloatingNav } from "@/src/components/ui/floating-nav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-primary flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
