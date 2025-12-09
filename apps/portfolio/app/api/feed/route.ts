import { NextRequest, NextResponse } from "next/server";

const cache = new Map();
const CACHE_TTL = 30 * 60 * 1000;

export async function GET(request: NextRequest) {
  const cacheKey = "blogs";

  const now = Date.now();
  const cached = cache.get(cacheKey);
  if (cached && now - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data);
  }

  try {
    const response = await fetch(`${process.env.BLOGS_API_URL}/api/feed`);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch blogs" },
        { status: response.status },
      );
    }

    const data = await response.json();

    cache.set(cacheKey, { data, timestamp: now });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
