import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({
      message: "Please fill all the fields",
      status: 400,
    });
  }

  try {
    await db.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json({
      message: "Message sent successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
