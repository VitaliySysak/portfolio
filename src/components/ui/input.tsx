import React from "react";
import { cn } from "@/src/lib/utils";
import { useFormContext } from "react-hook-form";

interface Props {
  className?: string;
  name: string;
  placeholder: string;
  label: string;
  type?: string;
}

export const Input: React.FC<Props> = ({ className, name, placeholder, label, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message as string;

  return (
    <div className={cn("", className)}>
      {label && <p className="text-lg text-[#AFB0B6] mb-2">{label}</p>}
      {type === "textarea" ? (
        <textarea
          className="bg-[#1C1C21] w-full px-5 py-2 min-h-28 max-h-60 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
          {...register(name)}
          placeholder={placeholder}></textarea>
      ) : (
        <input
          className="bg-[#1C1C21] w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-[#0E0E10] shadow-2xl focus:outline-none"
          {...register(name)}
          placeholder={placeholder}
        />
      )}

      {errorText && <p className={"text-red-500 text-sm"}>{errorText}</p>}
    </div>
  );
};
