import React from "react";

interface Props {
  className?: string;
}

export const LitUpButton: React.FC<Props> = ({ className }) => {
  return (
    <button type="submit" className="p-[3px] relative cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        Send Message
      </div>
    </button>
  );
};
