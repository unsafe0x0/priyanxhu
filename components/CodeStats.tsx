"use client";

import { useState, useEffect } from "react";

interface CodingStats {
  today: string;
  week: string;
  todayCommits: number;
  weekCommits: number;
}

const CodeStats = () => {
  const [data, setData] = useState<CodingStats>({
    today: "0h 0m",
    week: "0h 0m",
    todayCommits: 0,
    weekCommits: 0,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        if (!response.ok) {
          throw new Error("Failed to fetch coding stats");
        }
        const stats: CodingStats = await response.json();
        setData(stats);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    fetchStats();
  }, []);

  if (error) {
    return (
      <div className="mb-8">
        <p className="text-neutral-300">Error loading coding stats: {error}</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-neutral-300 bg-neutral-900 border border-neutral-800">
          Today: {data.today}
        </span>
        <span className="px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-neutral-300 bg-neutral-900 border border-neutral-800">
          This Week: {data.week}
        </span>
        <span className="px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-neutral-300 bg-neutral-900 border border-neutral-800">
          Today Commits: {data.todayCommits}
        </span>
        <span className="px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-neutral-300 bg-neutral-900 border border-neutral-800">
          Week Commits: {data.weekCommits}
        </span>
      </div>
    </div>
  );
};

export default CodeStats;
