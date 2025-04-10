import React from "react";
import { cn } from "@/src/lib/utils";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Clients: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("py-20", className)} id="testimonials">
      <h1 className="heading text-white">
        Kind words from <span className="text-purple-300">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center lg:mt-8">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image className="md:w-10 w-5" width={50} height={50} src={img} alt={name} />
              <Image className="md:w-24 w-20" width={50} height={50} src={nameImg} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
