import { NextResponse } from "next/server";
import { getUserFromToken, privy } from "@/app/api/utils/auth";

export async function POST(req) {
  try {
    const { challengeId } = await req.json();
    if (!challengeId || typeof challengeId !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing challengeId" },
        { status: 400 },
      );
    }

    const { customMetadata, id: uid } = await getUserFromToken(req);
    if (!uid) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid token" },
        { status: 401 },
      );
    }

    let challengesData = {};
    try {
      challengesData = JSON.parse(
        (customMetadata?.challenges as string) || "{}",
      );
    } catch (e) {
      console.error("Failed to parse challenges:", e);
      return NextResponse.json(
        { error: "Invalid challenges metadata format" },
        { status: 500 },
      );
    }

    challengesData[challengeId] = true;

    try {
      await privy.setCustomMetadata(uid, {
        ...customMetadata,
        challenges: JSON.stringify(challengesData),
      });
    } catch (e) {
      console.error("Failed to set custom metadata:", e);
      return NextResponse.json(
        { error: "Failed to update custom metadata" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 },
    );
  }
}
