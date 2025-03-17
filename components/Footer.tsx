import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-zinc-900 py-1 text-zinc-300">
      <div className="flex flex-col justify-center items-center w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] gap-2">
        <p className="text-sm md:text-md font-medium">
          {`Made with ❤️ by Priyanshu`}
        </p>
      </div>
    </footer>
  );
};
