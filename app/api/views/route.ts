import { db } from "@/prisma/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const view = await db.view.findFirst();

    if (!view) {
      return NextResponse.json({
        message: "No view record found",
        status: 404,
      });
    }

    await db.view.update({
      where: { id: view.id },
      data: { count: { increment: 1 } },
    });

    return NextResponse.json({ message: "View count updated", status: 200 });
  } catch (error) {
    console.error("Error updating view count:", error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
