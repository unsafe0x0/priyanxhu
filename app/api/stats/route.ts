import { NextRequest, NextResponse } from "next/server";

const cache = new Map();
const CACHE_TTL = 30 * 60 * 1000;

export async function GET(request: NextRequest) {
  const username = "unsafe0x0";

  const now = Date.now();
  const cached = cache.get(username);
  if (cached && now - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data);
  }

  try {
    const response = await fetch(
      `${process.env.CODE_STATS_API_URL}/api/public-stats?username=${username}`,
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from CoreDump" },
        { status: response.status },
      );
    }

    const data = await response.json();

    const today = data.todayTotal || "N/A";
    const week = data.weekTotal || "N/A";

    const todayDate = new Date();
    const todayStr = todayDate.toISOString().split("T")[0];
    const weekAgo = new Date(todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekAgoStr = weekAgo.toISOString().split("T")[0];

    const [weekCommitsRes, todayCommitsRes] = await Promise.all([
      fetch(
        `https://api.github.com/search/commits?q=author:${username}+committer-date:>${weekAgoStr}`,
        {
          headers: { "User-Agent": "priyanxhu-portfolio" },
        },
      ),
      fetch(
        `https://api.github.com/search/commits?q=author:${username}+committer-date:${todayStr}`,
        {
          headers: { "User-Agent": "priyanxhu-portfolio" },
        },
      ),
    ]);

    let weekCommits = 0;
    let todayCommits = 0;

    if (weekCommitsRes.ok) {
      const weekData = await weekCommitsRes.json();
      weekCommits = weekData.total_count || 0;
    }

    if (todayCommitsRes.ok) {
      const todayData = await todayCommitsRes.json();
      todayCommits = todayData.total_count || 0;
    }

    const result = { today, week, todayCommits, weekCommits };
    cache.set(username, { data: result, timestamp: now });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching coding stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
