"use client";
import React from "react";

import GitHubCalendar from "react-github-calendar";

const GithubContribution = () => {
  return (
    <section className="w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0">
      <GitHubCalendar
        username="bluetooxth"
        colorScheme="dark"
        fontSize={16}
        blockSize={12}
        theme={{
          dark: ["#18181b", "#0b5f78", "#0f7595", "#1692b8", "#27d3f3"],
        }}
      />
    </section>
  );
};

export default GithubContribution;
