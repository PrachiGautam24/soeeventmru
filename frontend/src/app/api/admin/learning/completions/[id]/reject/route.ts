import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await req.json();
    const { notes } = body;

    if (!notes || !notes.trim()) {
      return NextResponse.json(
        { error: "Rejection note required" },
        { status: 400 }
      );
    }

    const completion = await prisma.courseCompletionRequest.findUnique({
      where: { id },
    });

    if (!completion) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (completion.status !== "PENDING") {
      return NextResponse.json(
        { error: "Already processed" },
        { status: 400 }
      );
    }

    await prisma.courseCompletionRequest.update({
      where: { id },
      data: {
        status: "REJECTED",
        notes,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}