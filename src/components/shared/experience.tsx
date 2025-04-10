import React from "react";
import { cn } from "@/src/lib/utils";
import { workExperience } from "@/data";
import { Button } from "../ui/moving-borders";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Experience: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("py-20", className)} id="testimonials">
      <h1 className="heading text-white">
        My <span className="text-purple-300">work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button key={card.id} duration={Math.floor(Math.random() * 10000) + 10000} className="flex-1 text-white border-slate-800">
            <div className="felx lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                width={100}
                height={100}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-start text-white mt-3 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
