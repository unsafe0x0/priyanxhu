import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full bg-zinc-950 py-1 text-slate-200">
      <div className="flex flex-col justify-center items-center w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-2">
        <p className="text-sm md:text-md font-medium">
          {`© ${new Date().getFullYear()} Priyanshu Chahar`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
