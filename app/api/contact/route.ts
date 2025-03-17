import { db } from "@/prisma/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }

    await db.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json({
      message: "Message sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
