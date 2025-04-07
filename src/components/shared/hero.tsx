"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "./text-generate-effect";
import { MagicButton } from "../ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("pb-20 pt-60 h-screen", className)}>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen bg-primary">
        <div
          className={cn(
            "absolute inset-0 bg-primary [background-size:100px_100px]",
            "[mask-image:radial-gradient(ellipse_at_center,black_-500%,transparent_100%)] ",
            "[background-image:linear-gradient(to_right,#414559_3px,transparent_2px),linear-gradient(to_bottom,#414559_3px,transparent_2px)]"
          )}
        />
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-blue-50 uppercase tracking-widest text-xs text-center max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experience"
          />
          <p className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Vitaliy, a Next.js Developer
          </p>
          <a href="#about" className="">
            <MagicButton title="Show my work" icon={<FaLocationArrow size={12} />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};
