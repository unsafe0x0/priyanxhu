import { NextResponse } from "next/server";
import db from "@/prisma/db";

export async function POST() {
  try {
    const view = await db.view.findFirst();
    if (!view) {
      await db.view.create({
        data: {
          count: 1,
        },
      });
      return NextResponse.json(
        { message: "View recorded successfully" },
        { status: 200 },
      );
    }
    await db.view.update({
      where: { id: view.id },
      data: { count: { increment: 1 } },
    });
    return NextResponse.json(
      { message: "View recorded successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error recording view:", error);
    return NextResponse.json(
      { error: "Failed to record view" },
      { status: 500 },
    );
  }
}
