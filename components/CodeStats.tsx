"use client";

import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

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
      <section className="">
        <p className="text-muted">Error loading coding stats: {error}</p>
      </section>
    );
  }

  return (
    <section className="">
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-tight">
            Today Stats
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="rounded font-medium px-2 py-1">
              {data.today} Code Time
            </Badge>
            <Badge className="rounded font-medium px-2 py-1">
              {data.todayCommits} Commits
            </Badge>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-tight">
            This Week Stats
          </h2>
          <div className="flex flex-wrap gap-3">
            <Badge className="rounded font-medium px-2 py-1">
              {data.week} Code Time
            </Badge>
            <Badge className="rounded font-medium px-2 py-1">
              {data.weekCommits} Commits
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeStats;
