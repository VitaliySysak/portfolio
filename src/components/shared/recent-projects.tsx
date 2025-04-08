import React from "react";
import { cn } from "@/src/lib/utils";
import { projects } from "@/data";
import { PinContainer } from "../ui/pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

interface Props {
  className?: string;
}

export const RecentProjects: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("py-20", className)} id="projects">
      <h1 className="heading text-white">
        A small selection of <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}>
            <PinContainer title={link} href={link}>
              <div
                className={cn(
                  "relative flex items-center justify-center sm:w-[570px]",
                  "w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10"
                )}>
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image width={500} height={500} src="/bg.png" alt="bg-img" />
                </div>
                <Image width={500} height={500} className="z-10 absolute bottom-0" src={img} alt={title} />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className={cn(
                        "border border-white/[0.2] rounded-full bg-black",
                        "lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      )}
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <Image className="p-2" width={50} height={50} src={icon} alt={icon} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
