"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BasedIn = () => {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = timeNow.getHours().toString().padStart(2, "0");
  const minutes = timeNow.getMinutes().toString().padStart(2, "0");
  const seconds = timeNow.getSeconds().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h2 className="text-xl font-medium text-neutral-200 font-doto">
        {formattedTime}
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
