import React from "react";
import { cn } from "@/src/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { gridItems } from "@/data";

interface Props {
  className?: string;
}

export const Grid: React.FC<Props> = ({ className }) => {
  return (
    <section id="about" className={cn("", className)}>
      <BentoGrid className="w-full py-20">
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
