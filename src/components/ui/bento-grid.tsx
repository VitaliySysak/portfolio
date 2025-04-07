import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./grid-globe";
import React from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import animationData from "@/data/confetti.json";
import { MagicButton } from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const text = "sysak.vitaliy.dev@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 relative overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl border transition duration-200 border-white/[0.1]",
        className,
        "bg-gradient-to-r from-[rgba(4,7,29,1)] to-[rgba(12,14,35,1)]"
      )}>
      <div className={cn(id === 6 && "flex justify-center h-full")}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={100}
              height={100}
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div className={cn(id === 5 && "w-full opacity-80", "absolute right-0 -bottom-5")}>
          {spareImg && (
            <Image
              width={100}
              height={100}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id == 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200",
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg-text-base z-10 ">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white">{title}</div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="text-white py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Vue.js", "AWS", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="text-white py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={cn("absolute -bottom-5 right-0 ")}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                />
              </div>
              <MagicButton
                onClickCopy={handleCopy}
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
