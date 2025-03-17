"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GitGraph: React.FC = () => {
  return (
    <section className="w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] text-zinc-100">
      <GitHubCalendar
        username="bluetooxth"
        colorScheme="dark"
        fontSize={16}
        blockSize={12}
        theme={{
          dark: ["#212121", "#0e4429", "#146d32", "#26a641", "#39d353"],
        }}
      />
    </section>
  );
};
