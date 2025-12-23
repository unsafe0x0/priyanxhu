import { NextResponse } from "next/server";
import blogsData from "@/data/Data";

export async function GET() {
	return NextResponse.json(
		{ data: blogsData.slice(0, 3) },
		{
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		},
	);
}
