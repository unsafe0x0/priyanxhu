import React from "react";
import Image from "next/image";

const BasedIn = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h2 className="text-2xl font-semibold text-neutral-200 font-doto">
        Based In India
      </h2>
      <Image
        src="https://avatars.githubusercontent.com/u/165533860?v=4"
        alt="Globe Icon"
        width={150}
        height={150}
        className="h-full w-full object-cover rounded-md"
      />
    </div>
  );
};

export default BasedIn;
